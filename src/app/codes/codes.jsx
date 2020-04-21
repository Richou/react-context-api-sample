import React from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@atlaskit/icon/glyph/add'
import pluralize from 'pluralize'

import { CastaneaContainer, CastaneaHeader } from '../../core/components/castanea'

import CastaneaMenu from '../castanea.menu'

import './codes.scss'

import { ButtonCard, FullscreenDialog } from "../../core/ui";
import CodesForm from "./codes-form";

function Codes({ codesProjects, onCodesCreate, loadings }) {
  const [open, setOpen] = React.useState(false)

  async function onCodesSubmitHandle(codesRequest) {
    const succeed = await onCodesCreate(codesRequest)

    if (succeed) handleClose()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function renderFilesNumber(files) {
    const filteredFiles = files.filter((file) => file.mimeType !== 'directory')
    if (filteredFiles.length === 0) return 'No File'
    return pluralize('file', filteredFiles.length, true)
  }

  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader>Codes space</CastaneaHeader>
      <div className="codes-space-projects">
        <ButtonCard onClick={handleClickOpen}>
          <div className="add-project">
            <AddIcon />
            <p>Ajouter un projet</p>
          </div>
        </ButtonCard>
        {codesProjects && codesProjects.map((project) => (
          <ButtonCard className="project-btn" key={project.id} onClick={() => console.log(project.name)}>
            <header>{project.name}</header>
            <footer>{renderFilesNumber(project.files)}</footer>
          </ButtonCard>
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
  loadings: PropTypes.shape({
    creating: PropTypes.bool,
  }),
}

Codes.defaultProps = {
  codesProjects: [],
  loadings: {
    creating: false,
  },
}

export default Codes
