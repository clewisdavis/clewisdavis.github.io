# Vercel SDK Notes

## AI SDK React Server Components (RSC)

React Server Components gives you the ability to write UI that can be rendered on the server and streamed to the client. This way, language model generations and UI updates can be done form the server, making it easier to work with them in teh same place and keep them in sync.

Can go beyond just rendering text by rendering React components as part of their generations, how they can get increasingly difficult to build when they are rendered on the client as your app grows, and how RSC can help you stream them form the server instead.

### Rendering User Interfaces with Language Models

Language models generate text so at first, may seem like you would only need to render text in your application.

```JAVASCRIPT
// app/actions.tsx
const text = generateText({
  model: openai('gpt-3.5-turbo'),
  system: 'you are a friendly assistant'
  prompt: 'what is the weather in SF?'
  tools: {
    getWeather: {
      description: 'Get the weather for a location',
      parameters: z.object({
        city: z.string().describe('The city to get the weather for'),
        unit: z
          .enum(['C', 'F'])
          .describe('The unit to display the temperature in')
      }),
      execute: async ({ city, unit }) => {
        const weather = getWeather({ city, unit })
        // return the text
        return `It is currently ${weather.value}°${unit} and ${weather.description} in ${city}!`
      }
    }
  }
})
```

In the above example, the language model calls the `getWeather` function and returns the weather information as text.
💡 However, if you return a JSON object that represents the weather information, you can use it to render a React Component instead.

```JAVASCRIPT
// app/actions.ts
const text = generateText({
  model: openai('gpt-3.5-turbo'),
  system: 'you are a friendly assistant'
  prompt: 'what is the weather in SF?'
  tools: {
    getWeather: {
      description: 'Get the weather for a location',
      parameters: z.object({
        city: z.string().describe('The city to get the weather for'),
        unit: z
          .enum(['C', 'F'])
          .describe('The unit to display the temperature in')
      }),
      execute: async ({ city, unit }) => {
        const weather = getWeather({ city, unit })
        const { temperature, unit, description, forecast } = weather
        // return weather information as JSON
        return {
          temperature,
          unit,
          description,
          forecast
        }
      }
    }
  }
})
```

Now you can use the object returned by the `getWeather` function to conditionally render a React component `<WeatherCard />` that displays the weather information by **passing the object as props**.

```JAVASCRIPT
// app/page.tsx
return (
  <div>
    {messages.map(message => {
      if (message.role === 'function') {
        const { name, content } = message
        const { temperature, unit, description, forecast } = content;

        return (
          <WeatherCard
            weather={{
              temperature: 47,
              unit: 'F',
              description: 'sunny'
              forecast,
            }}
          />
        )
      }
    })}
  </div>
)
```

A preview of what that can look like.

![weather](images/image-3.png)

Rendering interfaces as part of the language model can help you elevate the UX, go beyond just text.

### Rendering Multiple User Interfaces

To recap, an application has to go through the following steps to render user interfaces as part of model generations:

1. The user sends a message to the language model.
2. The language model generates a response that includes a function call.
3. The function call returns a JSON object that represents the user interface.
4. The response is sent to the client.
5. The client receives the response and checks if the latest message was a function call.
6. If it was a function call, the client renders the user interface based on the JSON object returned by the function call.

Most applications have multiple functions that are called by the language model, and each function can return a different user interface.

For example, a function that searches for courses can return a list of courses, while a function that searches for people can return a list of people.

As the list grows, the complexity of your application will grow as well and it can become increasingly difficult to manage these user interfaces.

```JAVASCRIPT
{
  message.role === 'function' ? (
    message.name === 'api-search-course' ? (
      <Courses courses={message.content} />
    ) : message.name === 'api-search-profile' ? (
      <People people={message.content} />
    ) : message.name === 'api-meetings' ? (
      <Meetings meetings={message.content} />
    ) : message.name === 'api-search-building' ? (
      <Buildings buildings={message.content} />
    ) : message.name === 'api-events' ? (
      <Events events={message.content} />
    ) : message.name === 'api-meals' ? (
      <Meals meals={message.content} />
    ) : null
  ) : (
    <div>{message.content}</div>
  );
}
```

### Rendering User Interfaces on the Server

In order ot solve the problem of managing all your React components on teh client side, React Server Components (RSC) allow you to render React components ont eh server and stream teh to the client.

This prevents you from conditionally rendering user interfaces on the client based on the data returned by the language model, and instead allows you to directly stream them from the server during a model generation.

```JAVASCRIPT
import { createStreamableUI } from 'ai/rsc'

// CREATE STREAM TO SEND TO CLIENT
const uiStream = createStreamableUI();

const text = generateText({
  model: openai('gpt-3.5-turbo'),
  system: 'you are a friendly assistant'
  prompt: 'what is the weather in SF?'
  tools: {
    getWeather: {
      description: 'Get the weather for a location',
      parameters: z.object({
        city: z.string().describe('The city to get the weather for'),
        unit: z
          .enum(['C', 'F'])
          .describe('The unit to display the temperature in')
      }),
      execute: async ({ city, unit }) => {
        const weather = getWeather({ city, unit })
        const { temperature, unit, description, forecast } = weather

        // RENDER THE COMPONENT ON THE SERVER WITH PROPS PASSED TO IT
        uiStream.done(
          <WeatherCard
            weather={{
              temperature: 47,
              unit: 'F',
              description: 'sunny'
              forecast,
            }}
          />
        )
      }
    }
  }
})

return {
  display: uiStream.value
}
```

The `createStreamableUI` function belongs to the `ai/rec` module and helps you create a stream that can send React components to the client.

So on teh server, you are directly rendering the `<WeatherCard/>` component with teh props passed to it, and then streaming it to the client 📣 🫢. As a results, on the client side, you only need to render the UI that is streamed from the server.

```JAVASCRIPT
return (
  <div>
    {messages.map(message => (
      <div>{message.display}</div>
    ))}
  </div>
);
```

Now the steps involved are simplified as:

1. Teh user sends a message to the language model.
2. The language model generates a response that includes a function call.
3. The function call renders a React Component along with teh relevant props that represent the user interface.
4. The response is streamed to the client and rendered directly.
