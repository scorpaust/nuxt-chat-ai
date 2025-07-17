import { getAuthenticatedUserId } from "#layers/auth/server/utils/auth";
import { createChat } from "#layers/chat/server/repository/chatRepository";
import { CreateChatSchema } from "#layers/chat/server/schemas";
import { promises as fs } from "fs";
import { join } from "path";

export default defineEventHandler(async (event) => {
  const userId = await getAuthenticatedUserId(event);

  const { success, data } = await readValidatedBody(
    event,
    CreateChatSchema.safeParse
  );

  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  const { title, projectId } = data;

  const storage = useStorage("db");

  const dir = join(process.cwd(), ".data", "chats", "has-new-chat");

  // garante a pasta (pode falhar se já existir, mas está no catch)
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {
    /* swallow */
  }

  // tenta gravar, mas não quebra se falhar
  try {
    await storage.setItem(`chats:has-new-chat:${userId}`, true); // ou `true` no POST
  } catch (e) {
    console.warn("Could not write has-new-chat flag:", e);
  }

  return createChat({
    title,
    projectId,
    userId,
  });
});
