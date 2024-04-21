# Chris's Open AI Notes

## Text Generation

```JAVASCRIPT
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: 'YOURKEYHERE' });



async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a helpful assistant with a informal funny personality."},
        {"role": "user", "content": "Who won the super bowl in 2020?"},
        {"role": "assistant", "content": "The Kansas City Chiefs won the super bowl in 2020."},
        {"role": "user", "content": "How many passing yards did Patrick Mahomes complete?"}],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();
```

- The main input is the `messages` parameter.
- The 'messages' parameter must be an array of objects, where each object ahs a role. 'system', 'user', or 'assistant'
- Conversations can be as short as one message or many back and forth turns.
- Typical format, 'system' message first, followed by alternating 'user' and 'assistant' messages.

- System messages, sets the behavior of the assistant. You can set the personality of the assistant or provide specific instructions about how it should behave in the conversation.
- User messages, provide requests or comments for the assistant to respond to.
- Assistant messages, sore previous assistant responses, but can also be written by you to give examples of desired behavior.

- Including conversation history is important when user instructions refer to prior messages.
- In the example above, 'How many passing yards' only makes sense in the context of the prior messages about the Super Bowl.

## Function Calling

In an API call, you can describe functions and have that model choose to output a JSON object that contains arguments to call one or many functions.

The 'Chat Completions API' does not call the function; instead, the model generates JSON that you can use to call the function in your code.

The latest models, `gpt-3.5-turbo-0125` and `gpt-4-turbo-preview`, have been trained to both detect when a function should be called and respond with JSON that adheres to the function signature more closely than previous models.

✋ Recommend building in user confirmation flows before taking actions on behalf of users (sending email, posting something online etc.)

### Common Use Cases

Function calling allows you to more reliably get structured data back from the model:

- Create assistants that answer questions by calling external APIs.
  - For example; `send_email(to: string, body: string)` or `get_current_weather(location: string, unit: 'celsius' | 'fahrenheit')`

Basics sequence for function calling:

1. Call the model with the user query and a set of functions defined in the functions parameter.
2. The model can choose to call one or more functions; the content will be a stringified JSON object.
3. Parse the string into JSON in your code and call your function with the provided arguments if they exists.
4. Call the model again by appending the function response as a new message, and le the model summarize the results back to the user.

- Not all model versions are trained with function calling. See [supported models](https://platform.openai.com/docs/guides/function-calling/supported-models).

### Parallel Function Calling

The ability to perform multiple function calls together, allowing the effects and results to be resolved in parallel.

💡 Cookbook: [How to build an agent with the OpenAI Node.js SDK](https://cookbook.openai.com/examples/how_to_build_an_agent_with_the_node_sdk)

## Guides - Prompt Engineering

Guide shows strategies for getting better results from the large language models (sometimes referred to as GPT models) like GPT-4.

- [Prompt Examples](https://platform.openai.com/examples)

### Six Strategies for getting better results

#### Write clear instructions

The models cannot read your mind. If the output are too long, ask for brief replies. If outputs are too simple, ask for expert level writing. If you dislike theformat, demonstrate the format you like to see. The less teh model has to guess at what you want, the more likely you will get it.

Tactics:

- Include details in your query to get more relevant answers
- Ask the model to adopt a persona
- Use delimiters to clearly indicate distinct part of the input
- Specify the steps required to complete a task
- Provide examples
- Specify the desired length of the output

#### Provide reference text

Language models can confidently invent fake answers. IN teh same way notes can help students to better on a test, providing reference text to these models can help in answering with fewer fabrications.

Tactics:

- [Instruct the model to answer using a reference text](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-using-a-reference-text)
- [Instruct the model to answer with citations from a reference text](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-with-citations-from-a-reference-text)

#### Split complex tasks into simpler subtasks

Just as it's a good practice in software engineering  to decompose a complex system into a set of modular components, the same is tru of tasks submitted to a language model. Complex tasks tend to have higher error rates than simpler tasks. Complex tasks can be re-defined as a workflow fo simpler tasks in which the outputs of earlier tasks are used to construct the inputs of later tasks. .

Tactics:

- [Use intent classification to identify the most relevant instructions for a user query](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-answer-with-citations-from-a-reference-text)
- [For dialogue apps that require very long conversations, summarize or filter previous dialogue](https://platform.openai.com/docs/guides/prompt-engineering/tactic-for-dialogue-applications-that-require-very-long-conversations-summarize-or-filter-previous-dialogue)
- [Summarize long documents piecewise and construct a full summary recursively](https://platform.openai.com/docs/guides/prompt-engineering/tactic-summarize-long-documents-piecewise-and-construct-a-full-summary-recursively)

#### Give the model time to 'think'

If asked to multiple 17 by 28, you might not know it instantly, but can still work otu with some time. Similarly, models make more reasoning errors when trying to answer right away, rather than taking the time to work out an answer. Asking for a 'chain of thought' before an answer can help the model reason its way toward correct answers more reliably.

Tactics:

- [Instruct the model to work out its own solution before rushing to a conclusion](https://platform.openai.com/docs/guides/prompt-engineering/tactic-instruct-the-model-to-work-out-its-own-solution-before-rushing-to-a-conclusion)
- [Use inner monologue or a sequence of queries to hide the models reasoning process](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-inner-monologue-or-a-sequence-of-queries-to-hide-the-model-s-reasoning-process)
- [Ask the model if it missed anything on the previous passes](https://platform.openai.com/docs/guides/prompt-engineering/tactic-ask-the-model-if-it-missed-anything-on-previous-passes)

#### Use external tools

Compensate for weaknesses of the model by feeing it the outputs of other tools. For example, a text retrieval system (RAG or retrieval augmented generation) can tell the model about relevant documents. A code execution engine like OpenAI's Code Interpreter  can help the model to math and run code. If a task can be done more reliably or efficiently by a tool rather than by a LLM, offload it to get the best of both.

Tactics:

- [Use embeddings based search to implement efficient knowledge retrieval](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-embeddings-based-search-to-implement-efficient-knowledge-retrieval)
- [Use code execution to perform more accurate calculations or call external APIs](https://platform.openai.com/docs/guides/prompt-engineering/tactic-use-code-execution-to-perform-more-accurate-calculations-or-call-external-apis)
- [Give the model access to specific functions](https://platform.openai.com/docs/guides/prompt-engineering/tactic-give-the-model-access-to-specific-functions)

#### Test changes systematically

In some cases a modification to a prompt will achieve better performance on a few isolated examples but lead to worse overall performance. Test to be sure that a change in net positive to performance. Define a comprehensive test suite, known as 'eval'.

Tactics:

- [Evaluate model outputs with reference to gold-standard answers](https://platform.openai.com/docs/guides/prompt-engineering/tactic-evaluate-model-outputs-with-reference-to-gold-standard-answers)
