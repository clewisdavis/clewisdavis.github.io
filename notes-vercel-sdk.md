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
