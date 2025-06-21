import { d as defineEventHandler, r as readValidatedBody } from '../../_/nitro.mjs';
import { c as createProject } from '../../_/projectRepository.mjs';
import { e as CreateProjectSchema } from '../../_/schemas.mjs';
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
import 'zod';

const index_post = defineEventHandler(async (event) => {
  const { success, data } = await readValidatedBody(
    event,
    CreateProjectSchema.safeParse
  );
  if (!success) {
    return 400;
  }
  return createProject(data);
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
