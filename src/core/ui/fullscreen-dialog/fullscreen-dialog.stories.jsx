import React from 'react'

import FullscreenDialog from '.'

export default {
  title: 'Fullscreen Dialog',
  component: FullscreenDialog,
}

export const SimpleButtonCard = () => {
  const [open, setOpen] = React.useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div style={{ margin: 10 }}>
      <span style={{ cursor: 'pointer'}} onClick={handleOpen}>Open Dialog</span>
      <FullscreenDialog open={open} handleClose={handleClose} title="Title of the death">
        <div>I'm in a FullScreen Dialog</div>
      </FullscreenDialog>
    </div>
  )
}
