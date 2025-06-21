import { d as defineEventHandler, b as getRouterParams, a as useRuntimeConfig, s as setResponseHeaders } from '../../../../../_/nitro.mjs';
import { a as getMessagesByChatId, c as createMessageForChat } from '../../../../../_/chatRepository.mjs';
import { c as createOpenAIModel, s as streamChatResponse } from '../../../../../_/ai-service.mjs';
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

const stream_post = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const history = await getMessagesByChatId(id);
  const openai = createOpenAIModel(
    useRuntimeConfig().openaiApiKey
  );
  const stream = await streamChatResponse(openai, history);
  setResponseHeaders(event, {
    "Content-Type": "text/html",
    "Cache-Control": "no-cache",
    "Transfer-Encoding": "chunked"
  });
  let completeResponse = "";
  const transformStream = new TransformStream({
    transform(chunk, controller) {
      completeResponse += chunk;
      controller.enqueue(chunk);
    },
    async flush() {
      await createMessageForChat({
        chatId: id,
        content: completeResponse,
        role: "assistant"
      });
    }
  });
  return stream.pipeThrough(transformStream);
});

export { stream_post as default };
//# sourceMappingURL=stream.post.mjs.map
