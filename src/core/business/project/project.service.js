import { getLanguageFromMimeType, getMimeTypeFromFileName } from "../../common/utils/mime-types";

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

    return filesSnapshots.docs.map((item) => ({ ...item.data(), id: item.id }))
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

  function mapProject(project) {
    const { files = [], name, id, uid, description } = project

    const tree = {
      id,
      module: name,
      type: 'directory',
      leaf: false,
      children: buildProjectTreeChildren(files),
    }

    return { id, name, uid, description, tree}
  }

  function buildProjectTreeChildren(files = []) {
    const hashTable = Object.create(null)
    files.forEach((aData) => hashTable[aData.id] = { ...aData, children : [] })
    const dataTree = []
    files.forEach((file) => {
      const zeData = hashTable[file.id]
      const baseData = {
        id: zeData.id,
        module: zeData.name,
        content: zeData.content,
        mimeType: zeData.mimeType,
        parent: zeData.parent,
        language: getLanguageFromMimeType(zeData.mimeType),
        type: (zeData.mimeType === 'directory') ? 'directory' : 'file',
        leaf: (zeData.mimeType !== 'directory'),
        children : zeData.children,
      }
      if(file.parent) {
        hashTable[file.parent].children.push(baseData)
      } else {
        dataTree.push(baseData)
      }
    })
    return dataTree
  }

  async function saveFile(projectId, fileToSave) {
    try {
      const { id, content } = fileToSave

      await projectsFilesRepository(projectId).doc(id).update({ content })

      return true
    } catch (error) {
      return false
    }
  }

  async function newItem(projectId, itemRequest) {
    const mimeType = getMimeTypeFromFileName(itemRequest.name)

    const newItem = {
      ...itemRequest,
      content: '',
      mimeType,
    }

    const createdNewItem = await projectsFilesRepository(projectId).add(newItem)

    return {
      ...newItem,
      id: createdNewItem.id,
    }
  }

  return Object.freeze({
    findProjects,
    getProject,
    createProject,
    mapProject,
    saveFile,
    newItem,
  })
}
