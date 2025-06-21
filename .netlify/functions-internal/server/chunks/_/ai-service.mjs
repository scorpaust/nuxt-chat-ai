import { generateText, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const createOpenAIModel = (apiKey) => {
  const openai = createOpenAI({
    apiKey
  });
  return openai("gpt-4o-mini");
};
async function generateChatResponse(model, messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid messages format");
  }
  const response = await generateText({
    model,
    messages
  });
  return response.text.trim();
}
async function generateChatTitle(model, firstMessage) {
  const response = await generateText({
    model,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that generates concise, descriptive titles for chat conversations. Generate a title that captures the essence of the first message in 3 short words or less."
      },
      {
        role: "user",
        content: firstMessage
      }
    ]
  });
  return response.text.trim();
}
async function streamChatResponse(model, messages) {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid messages format");
  }
  return streamText({
    model,
    messages
  }).textStream;
}

export { generateChatTitle as a, createOpenAIModel as c, generateChatResponse as g, streamChatResponse as s };
//# sourceMappingURL=ai-service.mjs.map
