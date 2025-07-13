import { getAuthenticatedUserId } from "~~/layers/auth/server/utils/auth";
import {
  getAllProjectsByUser,
} from "../../repository/projectRepository";

export default defineEventHandler(async (event) => {
  const userId = await getAuthenticatedUserId(event);

  return getAllProjectsByUser(userId);
});
