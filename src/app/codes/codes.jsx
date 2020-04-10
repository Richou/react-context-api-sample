import React from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@atlaskit/icon/glyph/add';

import { CastaneaContainer, CastaneaHeader } from '../../core/components/castanea'

import CastaneaMenu from '../castanea.menu'

import './codes.scss'

import { ButtonCard, FullscreenDialog } from "../../core/ui";
import CodesForm from "./codes-form";

function Codes({ onCodesCreate }) {
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
      </div>
      <FullscreenDialog open={open} handleClose={handleClose}>
        <CodesForm onSubmit={onCodesSubmitHandle} />
      </FullscreenDialog>
    </CastaneaContainer>
  )
}

Codes.propTypes = {
  onCodesCreate: PropTypes.func.isRequired,
}

export default Codes
