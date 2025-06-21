import { d as defineEventHandler, b as getRouterParams } from '../../../_/nitro.mjs';
import { g as getProjectById } from '../../../_/projectRepository.mjs';
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

const _id__get = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  return getProjectById(id);
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
