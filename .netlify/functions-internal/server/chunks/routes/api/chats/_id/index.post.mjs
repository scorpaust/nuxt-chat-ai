import { d as defineEventHandler, b as getRouterParams, r as readValidatedBody } from '../../../../_/nitro.mjs';
import { c as createMessageForChat } from '../../../../_/chatRepository.mjs';
import { a as CreateMessageSchema } from '../../../../_/schemas.mjs';
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
import '../../../../_/projectRepository.mjs';
import 'zod';

const index_post = defineEventHandler(async (event) => {
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
    role: data.role
  });
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
