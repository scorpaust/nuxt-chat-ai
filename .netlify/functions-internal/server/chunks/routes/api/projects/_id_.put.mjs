import { d as defineEventHandler, b as getRouterParams, r as readValidatedBody } from '../../../_/nitro.mjs';
import { g as getProjectById, u as updateProject } from '../../../_/projectRepository.mjs';
import { d as UpdateProjectSchema } from '../../../_/schemas.mjs';
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

const _id__put = defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const { success, data } = await readValidatedBody(
    event,
    UpdateProjectSchema.safeParse
  );
  const project = await getProjectById(id);
  if (!project) return 404;
  if (!success) {
    return 400;
  }
  return updateProject(id, data);
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
