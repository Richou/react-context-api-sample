import { userId } from "../../common/utils/session";

export default function ProjectService(firestore) {

  const projectsRepository = firestore.collection('projects')
  const projectsFilesRepository = (projectId) => firestore.collection(`/projects/${projectId}/files`)

  async function createProject(project) {
    const createdProject = await projectsRepository.add({
      name: project.name,
      description: project.description,
      ownerId: userId(),
    })

    if (!project.readme) return createdProject

    return projectsFilesRepository(createdProject.id).add({
      name: 'readme.md',
      mimeType: 'text/markdown',
      content: `# ${project.name}`,
    })
  }

  async function findProjects() {
    const projectsSnapshots = await projectsRepository.get()

    return _asyncGetProjectFiles(projectsSnapshots)
  }

  async function _asyncGetProjectFiles(projectsSnapshots) {
    return Promise.all(projectsSnapshots.docs.map(async (item) => {
      const files = await _getProjectFiles(item.id)

      const data = item.data()

      return {
        id: item.id,
        name: data.name,
        description: data.description,
        ownerId: data.ownerId,
        files,
      }
    }))
  }

  async function _getProjectFiles(projectId) {
    const filesSnapshots = await projectsFilesRepository(projectId).get()

    return filesSnapshots.docs.map((item) => item.data())
  }

  return Object.freeze({
    findProjects,
    createProject,
  })
}
