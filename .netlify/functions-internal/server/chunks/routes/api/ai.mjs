import { d as defineEventHandler, r as readValidatedBody, a as useRuntimeConfig } from '../../_/nitro.mjs';
import { c as createOpenAIModel, g as generateChatResponse } from '../../_/ai-service.mjs';
import { C as ChatMessageSchema } from '../../_/schemas.mjs';
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
import 'ai';
import '@ai-sdk/openai';
import 'zod';

const ai = defineEventHandler(async (event) => {
  const { success, data } = await readValidatedBody(
    event,
    ChatMessageSchema.safeParse
  );
  if (!success) {
    return 400;
  }
  const { messages } = data;
  const openaiApiKey = useRuntimeConfig().openaiApiKey;
  const openaiModel = createOpenAIModel(openaiApiKey);
  const response = await generateChatResponse(openaiModel, messages);
  return {
    id: messages.length.toString(),
    role: "assistant",
    content: response
  };
});

export { ai as default };
//# sourceMappingURL=ai.mjs.map
