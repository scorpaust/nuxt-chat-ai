import { d as defineEventHandler, b as getRouterParams, r as readValidatedBody, c as useStorage } from '../../../_/nitro.mjs';
import { u as updateChat } from '../../../_/chatRepository.mjs';
import { U as UpdateChatSchema } from '../../../_/schemas.mjs';
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
import '../../../_/projectRepository.mjs';
import 'zod';

const _id__put = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { success, data } = await readValidatedBody(
    event,
    UpdateChatSchema.safeParse
  );
  if (!success) {
    return 400;
  }
  const storage = useStorage("db");
  await storage.setItem("chats:has-new-chat", true);
  return updateChat(id, data);
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
