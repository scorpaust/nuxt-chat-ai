import { getAuthenticatedUserId } from "~~/layers/auth/server/utils/auth";
import {
  updateProject,
  getProjectByIdForUser,
} from "../../repository/projectRepository";
import { UpdateProjectSchema } from "../../schemas";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  const userId = await getAuthenticatedUserId(event);

  // Verify user owns the project
  const project = await getProjectByIdForUser(id, userId);

  if (!project) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found",
    });
  }

  const { success, data } = await readValidatedBody(
    event,
    UpdateProjectSchema.safeParse
  );

  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Project not found",
    });
  }

  return updateProject(id, data);
});
