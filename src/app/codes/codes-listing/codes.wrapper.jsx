import React from 'react'
import Codes from './codes'
import { compose } from 'recompose'
import { withCodesContext } from '..'
import { withRouter } from "react-router";
import { CODES_WORKSPACE } from "../../castanea.routes";
import { withCodesDependenciesInjection } from "../context/codes.di";

function CodesWrapper({ history, projectService, codesContextHelper }) {
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

  function onCodesClickedHandle(id) {
    history.push(CODES_WORKSPACE.url.replace(':id', id))
  }

  return (
    <Codes
      codesProjects={codesContextHelper.context().codesProjects}
      onCodesCreate={onCodesCreateHandle}
      onCodesClicked={onCodesClickedHandle}
      loadings={{ creating }}
    />
  )
}

export default compose(
  withCodesContext,
  withCodesDependenciesInjection,
  withRouter,
)(CodesWrapper)
