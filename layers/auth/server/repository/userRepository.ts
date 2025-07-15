import { getPrismaClient } from "~~/layers/base/server/utils/prisma";
import { seedDemoDataForUser } from "./seedRepository";

const prisma = getPrismaClient();

export async function findUserByProviderId(providerId: string) {
  return await prisma.user.findUnique({
    where: { providerId },
  });
}

export async function createUserFromGitHub(githubUser: GitHubUser) {
  return await prisma.user.create({
    data: {
      email: githubUser.email,
      name: githubUser.name || githubUser.login,
      provider: "github",
      providerId: String(githubUser.id),
    },
  });
}

export async function findOrCreateUser(githubUser: GitHubUser) {
  const providerId = String(githubUser.id);

  // Try to find existing user
  let user = await findUserByProviderId(providerId);

  if (!user) {
    // Create new user if not found
    user = await createUserFromGitHub(githubUser);

    try {
      await seedDemoDataForUser(user.id);
    } catch (error) {
      console.error("Could not seed demo data for user:", error);
    }
  }

  return user;
}
