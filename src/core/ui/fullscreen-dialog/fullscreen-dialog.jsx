import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, Slide } from '@material-ui/core'
import CrossIcon from '@atlaskit/icon/glyph/cross';

import './fullscreen-dialog.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function FullscreenDialog({ open, handleClose, title, children }) {
  return (
    <Dialog className="fullscreen-dialog-container" fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <header>
        <div className="fullscreen-dialog-close-btn">
          <span onClick={handleClose}><CrossIcon /></span>
        </div>
        <div>{title}</div>
      </header>
      <div className="fullscreen-dialog-content">{children}</div>
    </Dialog>
  )
}

FullscreenDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string,
}

FullscreenDialog.defaultProps = {
  open: false,
  title: '',
}

export default FullscreenDialog
