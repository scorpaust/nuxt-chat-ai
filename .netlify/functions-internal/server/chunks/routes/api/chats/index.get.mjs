import { d as defineEventHandler, b as getRouterParams } from '../../../_/nitro.mjs';
import { g as getChatById } from '../../../_/chatRepository.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  return getChatById(id);
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
