import React from 'react'
import { compose } from "recompose";
import { withCodesContext } from "../context/codes.hoc";
import { withCodesDependenciesInjection } from "../context/codes.di";
import CodesWorkspace from "./codes-workspace";

function CodesWorkspaceWrapper({ match, codesContextHelper, projectService }) {
  const [working, setWorking] = React.useState(true)

  React.useEffect(() => {
    fetchProjectById(match.params.id).then(() => setWorking(false))
  }, [])

  async function fetchProjectById(id) {
    const project = await projectService.getProject(id)

    if (!project.error) {
      codesContextHelper.dispatchCodesWorkspace(project)
    }
    return project
  }

  return (
    <CodesWorkspace
      working={working}
      codesProject={codesContextHelper.context().codesWorkspace}
    />
  )
}

export default compose(
  withCodesContext,
  withCodesDependenciesInjection,
)(CodesWorkspaceWrapper)
