import { getAuthenticatedUserId } from "~~/layers/auth/server/utils/auth";
import {
  getChatByIdForUser,
  getMessagesByChatId,
} from "../../../../repository/chatRepository";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const userId = await getAuthenticatedUserId(event);

  // Verify user owns the chat
  const chat = await getChatByIdForUser(id, userId);
  if (!chat) {
    throw createError({
      statusCode: 404,
      statusMessage: "Chat not found",
    });
  }

  const messages = await getMessagesByChatId(id);
  return messages;
});
