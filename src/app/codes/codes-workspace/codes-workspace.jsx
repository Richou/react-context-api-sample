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

const tabs = [
  {
    id: 'one',
    label: 'Tab one',
    content: <p>Hello Tab One !</p>,
  },
]

function CodesWorkspace({ codesProject, working, onActions }) {
  const [code, setCode] = React.useState('')

  return (
    <CastaneaContainer className="codes-workspace-main" menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{codesProject.name}</CastaneaHeader>
      <div className="codes-workspace-container">
        <div className="codes-workspace-files">
          <TreeView data={codesProject.tree} onActions={onActions} />
        </div>
        <div className="codes-workspace-code-area">
          <TabsClosable
            allowAdd={false}
            tabs={tabs}
          />
        </div>
      </div>
    </CastaneaContainer>
  )
}

CodesWorkspace.propTypes = {
  working: PropTypes.bool,
  onActions: PropTypes.func,
  codesProjects: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    files: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

CodesWorkspace.defaultProps = {
  working: false,
  codesProjects: {},
  onActions: () => {},
}

export default CodesWorkspace
