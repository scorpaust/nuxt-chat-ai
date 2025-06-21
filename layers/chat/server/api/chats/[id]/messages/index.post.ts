import { createMessageForChat } from "../../../../repository/chatRepository";
import { CreateMessageSchema } from "../../../../schemas";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const { success, data } = await readValidatedBody(
    event,
    CreateMessageSchema.safeParse
  );

  if (!success) {
    return 400;
  }

  return createMessageForChat({
    chatId: id,
    content: data.content,
    role: data.role,
  });
});
