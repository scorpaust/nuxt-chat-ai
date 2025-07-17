import { getAuthenticatedUserId } from "~~/layers/auth/server/utils/auth";
import { getAllChats } from "#layers/chat/server/repository/chatRepository";
import { promises as fs } from "fs";
import { join } from "path";

export default defineCachedEventHandler(
  async (event) => {
    const userId = await getAuthenticatedUserId(event);

    const storage = useStorage("db");

    // caminho completo ao ficheiro que o useStorage vai usar
    const dir = join(process.cwd(), ".data", "chats", "has-new-chat");

    // garante a pasta (pode falhar se já existir, mas está no catch)
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch {
      /* swallow */
    }

    // tenta gravar, mas não quebra se falhar
    try {
      await storage.setItem(`chats:has-new-chat:${userId}`, false); // ou `true` no POST
    } catch (e) {
      console.warn("Could not write has-new-chat flag:", e);
    }
    return getAllChats();
  },
  {
    name: "getAllChats",
    maxAge: 0,
    swr: false,
    async shouldInvalidateCache(event) {
      const userId = await getAuthenticatedUserId(event);

      const storage = useStorage("db");
      const hasNewChat = await storage.getItem<boolean>(
        `chats:has-new-chat:${userId}`
      );
      return hasNewChat || false;
    },
  }
);
