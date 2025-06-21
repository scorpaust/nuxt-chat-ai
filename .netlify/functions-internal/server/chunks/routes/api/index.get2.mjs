import { d as defineEventHandler } from '../../_/nitro.mjs';
import { a as getAllProjects } from '../../_/projectRepository.mjs';
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

const index_get = defineEventHandler(async (_event) => {
  return getAllProjects();
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
