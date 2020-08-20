import React from 'react'
import PropTypes from 'prop-types'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'

function SimpleDialog({ children, actions, onClose, open, title }) {
  return (
    <ModalTransition>
      {open && (
        <Modal actions={actions} onClose={onClose} heading={title}>
          {children}
        </Modal>
      )}
    </ModalTransition>
  )
}

SimpleDialog.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
  title: PropTypes.string,
}

SimpleDialog.defaultProps = {
  open: false,
  actions: [],
  onClose: () => {},
  title: '',
}

export default SimpleDialog
