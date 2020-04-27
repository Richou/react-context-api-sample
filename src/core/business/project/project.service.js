export default function ProjectService(firestore, authentication) {

  const projectsRepository = firestore.collection('projects')
  const projectsFilesRepository = (projectId) => firestore.collection(`/projects/${projectId}/files`)

  async function createProject(project) {
    const { uid } = authentication.currentUser
    const createdProject = await projectsRepository.add({
      name: project.name,
      description: project.description,
      uid,
    })

    if (!project.readme) return createdProject

    return projectsFilesRepository(createdProject.id).add({
      name: 'readme.md',
      mimeType: 'text/markdown',
      content: `# ${project.name}`,
    })
  }

  async function findProjects() {
    try {
      const { uid } = authentication.currentUser
      const projectsSnapshots = await projectsRepository.where('uid', '==', uid).get()

      return _asyncGetProjectFiles(projectsSnapshots)
    } catch (error) {
      return []
    }
  }

  function _mapProjectItem(item) {
    const data = item.data()
    return {
      id: item.id,
      name: data.name,
      description: data.description,
      uid: data.uid,
    }
  }

  async function _asyncGetProjectFiles(projectsSnapshots) {
    return Promise.all(projectsSnapshots.docs.map(async (item) => {
      const baseItem = _mapProjectItem(item)

      try {
        const files = await _getProjectFiles(item.id)

        return { ...baseItem, files }
      } catch (error) {
        return { ...baseItem, files: []}
      }
    }))
  }

  async function _getProjectFiles(projectId) {
    const filesSnapshots = await projectsFilesRepository(projectId).get()

    return filesSnapshots.docs.map((item) => item.data())
  }

  async function getProject(projectId) {
    try {
      const projectSnapshot = await projectsRepository.doc(projectId).get()

      const files = await _getProjectFiles(projectId)

      const baseItem = _mapProjectItem(projectSnapshot)

      return { ...baseItem, files }
    } catch (error) {
      console.log(error)
      return { error }
    }
  }

  return Object.freeze({
    findProjects,
    getProject,
    createProject,
  })
}
