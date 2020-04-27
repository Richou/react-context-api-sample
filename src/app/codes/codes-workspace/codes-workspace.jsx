import React from 'react'
import PropTypes from 'prop-types'

import { CastaneaContainer, CastaneaHeader } from '../../../core/components/castanea'

import CastaneaMenu from '../../castanea.menu'
import { MonacoEditor } from "../../../core/ui";

import './codes-workspace.scss'
import { CODES_HOME, HOME_ROUTE } from "../../castanea.routes";

const breadcrumb = [
  {
    to: HOME_ROUTE.url,
    label: HOME_ROUTE.label,
  },
  {
    to: CODES_HOME.url,
    label: CODES_HOME.label,
  },
]

function CodesWorkspace({ codesProject, working }) {
  const [code, setCode] = React.useState('')
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{codesProject.name}</CastaneaHeader>
      <div className="codes-workspace-container">
      </div>
    </CastaneaContainer>
  )
}

CodesWorkspace.propTypes = {
  working: PropTypes.bool,
  codesProjects: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

CodesWorkspace.defaultProps = {
  working: false,
  codesProjects: {},
}

export default CodesWorkspace
