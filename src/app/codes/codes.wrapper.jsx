import React from 'react'
import Codes from './codes'
import ProjectService from '../../core/business/project/project.service'
import Firebase from '../../core/common/utils/firebase'
import { compose } from 'recompose'
import { withCodesContext } from './context/codes.hoc'

const firebase = Firebase()
const projectService = ProjectService(firebase.getFirestore())

function CodesWrapper({ codesContextHelper }) {
  const [, setWorking] = React.useState(false)
  const [creating, setCreating] = React.useState(false)

  React.useEffect(() => {
    setWorking(true)
    getProjects().then(() => setWorking(false))
  }, [])

  async function getProjects() {
    const response = await projectService.findProjects()

    codesContextHelper.dispatchProjects(response)
  }

  async function onCodesCreateHandle(codesRequest) {
    setCreating(true)
    await projectService.createProject(codesRequest)
    await getProjects()
    setCreating(false)
    return true
  }

  return (
    <Codes
      codesProjects={codesContextHelper.context().codesProjects}
      onCodesCreate={onCodesCreateHandle}
      loadings={{ creating }}
    />
  )
}

export default compose(
  withCodesContext,
)(CodesWrapper)
