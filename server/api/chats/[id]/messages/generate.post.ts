import { getAuthenticatedUserId } from "#layers/auth/server/utils/auth";
import {
  getMessagesByChatId,
  createMessageForChat,
  getChatByIdForUser,
} from "#layers/chat/server/repository/chatRepository";
import {
  createOpenAIModel,
  generateChatResponse,
} from "#layers/chat/server/services/ai-service";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const userId = await getAuthenticatedUserId(event);

  // Verify user owns the chat
  const chat = await getChatByIdForUser(id as string, userId);
  if (!chat) {
    throw createError({
      statusCode: 404,
      statusMessage: "Chat not found",
    });
  }

  const history = await getMessagesByChatId(id as string);

  const openai = createOpenAIModel(useRuntimeConfig().openaiApiKey);
  const reply = await generateChatResponse(openai, history);

  return createMessageForChat({
    chatId: id as string,
    content: reply,
    role: "assistant",
  });
});
