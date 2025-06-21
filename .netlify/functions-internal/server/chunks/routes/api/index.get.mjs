import { e as defineCachedEventHandler, c as useStorage } from '../../_/nitro.mjs';
import { b as getAllChats } from '../../_/chatRepository.mjs';
import 'uuid';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import '../../_/projectRepository.mjs';

const index_get = defineCachedEventHandler(
  async (_event) => {
    const storage = useStorage("db");
    await storage.setItem("chats:has-new-chat", false);
    return getAllChats();
  },
  {
    name: "getAllChats",
    maxAge: 0,
    swr: false,
    async shouldInvalidateCache() {
      const storage = useStorage("db");
      const hasNewChat = await storage.getItem("chats:has-new-chat");
      return hasNewChat || false;
    }
  }
);

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
