import { d as defineEventHandler, r as readValidatedBody, c as useStorage } from '../../_/nitro.mjs';
import { d as createChat } from '../../_/chatRepository.mjs';
import { c as CreateChatSchema } from '../../_/schemas.mjs';
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
import 'zod';

const index_post = defineEventHandler(async (event) => {
  const { success, data } = await readValidatedBody(
    event,
    CreateChatSchema.safeParse
  );
  if (!success) {
    return 400;
  }
  const { title, projectId } = data;
  const storage = useStorage("db");
  await storage.setItem("chats:has-new-chat", true);
  return createChat({
    title,
    projectId
  });
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
