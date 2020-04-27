import React from 'react'

import Firebase from "../../../core/common/utils/firebase";
import ProjectService from "../../../core/business/project/project.service";

const firebase = Firebase()
const projectService = ProjectService(firebase.getFirestore(), firebase.getAuthentication())

export const withCodesDependenciesInjection = (Component) => ({ ...props }) => {
  return <Component {...props} projectService={projectService} />
}
