import { getAuthenticatedUserId } from "#layers/auth/server/utils/auth";
import {
  getMessagesByChatId,
  createMessageForChat,
  getChatByIdForUser,
} from "#layers/chat/server/repository/chatRepository";
import {
  createOpenAIModel,
  streamChatResponse,
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
  const stream = await streamChatResponse(openai, history);

  setResponseHeaders(event, {
    "Content-Type": "text/html",
    "Cache-Control": "no-cache",
    "Transfer-Encoding": "chunked",
  });

  let completeResponse = "";

  const transformStream = new TransformStream({
    transform(chunk, controller) {
      completeResponse += chunk;
      controller.enqueue(chunk);
    },

    async flush() {
      await createMessageForChat({
        chatId: id as string,
        content: completeResponse,
        role: "assistant",
      });
    },
  });

  return stream.pipeThrough(transformStream);
});
