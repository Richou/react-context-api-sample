import React from 'react'
import PropTypes from 'prop-types'
import { Button, InputField } from "../../../core/ui";

import './new-file-form.scss'

function NewFileForm({ onSubmit, onCancel }) {
  const [inputs, setInputs] = React.useState({
    name: '',
  })

  function onSubmitHandle(event) {
    event.preventDefault()

    onSubmit({ ...inputs })
  }

  function handleChange(event) {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  return (
    <form className="new-item" onSubmit={onSubmitHandle}>
      <InputField name="name" label="New name" onChange={handleChange} value={inputs.name} required />
      <div className="form-action-buttons">
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  )
}

NewFileForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}

NewFileForm.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {},
}

export default NewFileForm
