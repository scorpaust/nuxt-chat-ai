import { d as defineEventHandler, b as getRouterParams, a as useRuntimeConfig } from '../../../../../_/nitro.mjs';
import { a as getMessagesByChatId, c as createMessageForChat } from '../../../../../_/chatRepository.mjs';
import { c as createOpenAIModel, g as generateChatResponse } from '../../../../../_/ai-service.mjs';
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
import '../../../../../_/projectRepository.mjs';
import 'ai';
import '@ai-sdk/openai';

const generate_post = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const history = await getMessagesByChatId(id);
  const openai = createOpenAIModel(useRuntimeConfig().openaiApiKey);
  const reply = await generateChatResponse(openai, history);
  return createMessageForChat({
    chatId: id,
    content: reply,
    role: "assistant"
  });
});

export { generate_post as default };
//# sourceMappingURL=generate.post.mjs.map
