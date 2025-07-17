import { getAuthenticatedUserId } from "~~/layers/auth/server/utils/auth";
import {
  createMessageForChat,
  getChatByIdForUser,
} from "#layers/chat/server/repository/chatRepository";
import { CreateMessageSchema } from "#layers/chat/server/schemas";

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

  const { success, data } = await readValidatedBody(
    event,
    CreateMessageSchema.safeParse
  );

  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  return createMessageForChat({
    chatId: id as string,
    content: data.content,
    role: data.role,
  });
});
