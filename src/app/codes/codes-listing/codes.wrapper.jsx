import React from 'react'
import Codes from './codes'
import { compose } from 'recompose'
import { useCodesContext } from '..'
import { withRouter } from "react-router";
import { CODES_WORKSPACE } from "../../castanea.routes";
import { withCodesDependenciesInjection } from "../context/codes.di";

function CodesWrapper({ history, projectService }) {
  const [codesContext, dispatch] = useCodesContext()
  const [, setWorking] = React.useState(false)
  const [creating, setCreating] = React.useState(false)

  React.useEffect(() => {
    setWorking(true)
    getProjects().then(() => setWorking(false))
  }, [])

  async function getProjects() {
    const response = await projectService.findProjects()

    dispatch({
      type: 'codeProjects:set',
      payload: response,
    })
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
      codesProjects={codesContext.codesProjects}
      onCodesCreate={onCodesCreateHandle}
      onCodesClicked={onCodesClickedHandle}
      loadings={{ creating }}
    />
  )
}

export default compose(
  withCodesDependenciesInjection,
  withRouter,
)(CodesWrapper)
