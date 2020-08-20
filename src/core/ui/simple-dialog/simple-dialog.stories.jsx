import React from 'react'

import SimpleDialog from '.'

export default {
  title: 'Simple Dialog',
  component: SimpleDialog,
}

export const SimpleSimpleDialog = () => {
  const [open, setOpen] = React.useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  const actions = [
    { text: 'Save', onClick: handleClose },
    { text: 'Close', onClick: handleClose },
  ]

  return (
    <div style={{ margin: 10 }}>
      <span style={{ cursor: 'pointer'}} onClick={handleOpen}>Open Dialog</span>
      <SimpleDialog open={open} onClose={handleClose} title="Title of the death" actions={actions}>
        <div>I'm in a simple Dialog</div>
      </SimpleDialog>
    </div>
  )
}
