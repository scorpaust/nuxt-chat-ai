import { f as MOCK_PROJECT } from './nitro.mjs';
import { v4 } from 'uuid';

const projects = [MOCK_PROJECT];
function getAllProjects() {
  return [...projects].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
}
function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}
async function createProject(data) {
  const now = /* @__PURE__ */ new Date();
  const newProject = {
    id: v4(),
    name: data.name || "New Project",
    createdAt: now,
    updatedAt: now
  };
  projects.push(newProject);
  return newProject;
}
async function updateProject(id, data) {
  const projectIndex = projects.findIndex((p) => p.id === id);
  if (projectIndex === -1) return null;
  const project = projects[projectIndex];
  if (!project) return null;
  const updatedProject = {
    id: project.id,
    name: data.name,
    createdAt: project.createdAt,
    updatedAt: /* @__PURE__ */ new Date()
  };
  projects[projectIndex] = updatedProject;
  return updatedProject;
}

export { getAllProjects as a, createProject as c, getProjectById as g, updateProject as u };
//# sourceMappingURL=projectRepository.mjs.map
