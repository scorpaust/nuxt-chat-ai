import { d as defineEventHandler, b as getRouterParams, r as readValidatedBody, a as useRuntimeConfig } from '../../../../_/nitro.mjs';
import { u as updateChat } from '../../../../_/chatRepository.mjs';
import { c as createOpenAIModel, a as generateChatTitle } from '../../../../_/ai-service.mjs';
import { b as UpdateChatTitleSchema } from '../../../../_/schemas.mjs';
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
import 'ai';
import '@ai-sdk/openai';
import 'zod';

const title_post = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { success, data } = await readValidatedBody(
    event,
    UpdateChatTitleSchema.safeParse
  );
  if (!success) {
    return 400;
  }
  const model = createOpenAIModel(useRuntimeConfig().openaiApiKey);
  const title = await generateChatTitle(model, data.message);
  return updateChat(id, { title });
});

export { title_post as default };
//# sourceMappingURL=title.post.mjs.map
