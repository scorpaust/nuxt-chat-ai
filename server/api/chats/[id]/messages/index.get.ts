import { getAuthenticatedUserId } from "#layers/auth/server/utils/auth";
import {
  getChatByIdForUser,
  getMessagesByChatId,
} from "#layers/chat/server/repository/chatRepository";

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

  const messages = await getMessagesByChatId(id as string);
  return messages;
});
