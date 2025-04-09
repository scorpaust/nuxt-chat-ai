import {
  createOpenAIModel,
  generateChatResponse,
} from "~~/server/services/ai-service";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { messages } = body;

  const id = messages.length.toString();

  // const lastMessage = messages[messages.length - 1];

  const openApiKey = useRuntimeConfig().openaiApiKey;

  const openAIModel = createOpenAIModel(openApiKey);

  const response = await generateChatResponse(openAIModel, messages);

  return {
    id,
    role: "assistant",
    content: response,
  };
});
