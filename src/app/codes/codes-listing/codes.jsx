import React from 'react'
import PropTypes from 'prop-types'
import { Add as AddIcon } from '../../../core/icons'
import pluralize from 'pluralize'

import { CastaneaContainer, CastaneaHeader } from '../../../core/components/castanea'

import CastaneaMenu from '../../castanea.menu'

import './codes.scss'

import { ButtonCard, FullscreenDialog } from "../../../core/ui";
import CodesForm from "./codes-form";
import { CODES_HOME, HOME_ROUTE } from "../../castanea.routes";
import { Link } from "react-router-dom";

const breadcrumb = [
  {
    to: HOME_ROUTE.url,
    label: HOME_ROUTE.label,
  },
]

function Codes({ codesProjects, onCodesCreate, onCodesClicked, loadings }) {
  const [open, setOpen] = React.useState(false)

  async function onCodesSubmitHandle(codesRequest) {
    const succeed = await onCodesCreate(codesRequest)

    if (succeed) handleClose()
  }

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function renderFilesNumber(files) {
    const filteredFiles = files.filter((file) => file.mimeType !== 'directory')
    if (filteredFiles.length === 0) return 'No File'
    return pluralize('file', filteredFiles.length, true)
  }

  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{CODES_HOME.label}</CastaneaHeader>
      <div className="codes-space-projects">
        <ButtonCard onClick={handleClickOpen}>
          <div className="add-project">
            <AddIcon size={36} />
            <p>Créer un projet</p>
          </div>
        </ButtonCard>
        {codesProjects && codesProjects.map((project) => (
          <Link className="code-space-link" to={`${CODES_HOME.url}/${project.id}`} key={project.id}>
            <ButtonCard className="project-btn">
              <header>{project.name}</header>
              <section>{project.description}</section>
              <footer>{renderFilesNumber(project.files)}</footer>
            </ButtonCard>
          </Link>
        ))}
      </div>
      <FullscreenDialog open={open} handleClose={handleClose}>
        <CodesForm working={loadings.creating} onSubmit={onCodesSubmitHandle} />
      </FullscreenDialog>
    </CastaneaContainer>
  )
}

Codes.propTypes = {
  codesProjects: PropTypes.arrayOf(PropTypes.object),
  onCodesCreate: PropTypes.func.isRequired,
  onCodesClicked: PropTypes.func,
  loadings: PropTypes.shape({
    creating: PropTypes.bool,
  }),
}

Codes.defaultProps = {
  codesProjects: [],
  onCodesClicked: () => {},
  loadings: {
    creating: false,
  },
}

export default Codes
