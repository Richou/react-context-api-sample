import React from 'react'
import PropTypes from 'prop-types'

import { CastaneaContainer, CastaneaHeader } from '../../../core/components/castanea'

import CastaneaMenu from '../../castanea.menu'
import { CodeEditor, MonacoEditor, TreeView } from "../../../core/ui";

import './codes-workspace.scss'
import { CODES_HOME, HOME_ROUTE } from "../../castanea.routes";
import TabsClosable from "../../../core/ui/tabs-closable";

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

const tree = {
  module: 'react-ui-tree',
  id: '01',
  children: [{
    module: 'dist',
    id: '02',
    children: [{
      module: 'node.js',
      id: '03',
    }]
  }]
}

const tabs = [
  {
    id: 'one',
    label: 'Tab one',
    content: <p>Hello Tab One !</p>,
  },
]

function CodesWorkspace({ codesProject, working }) {
  const [code, setCode] = React.useState('')
  return (
    <CastaneaContainer className="codes-workspace-main" menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{codesProject.name}</CastaneaHeader>
      <div className="codes-workspace-container">
        <div className="codes-workspace-files">
          <TreeView data={tree} />
        </div>
        <div className="codes-workspace-code-area">
          <TabsClosable
            tabs={tabs}
          />
        </div>
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
