import React from 'react'
import PropTypes from 'prop-types'
import { Button, Checkbox, InputField } from "../../core/ui";

function CodesForm({ onSubmit, working }) {
  const [inputs, setInputs] = React.useState({
    name: '',
    description: '',
    readme: false,
  })

  function onSubmitHandle(event) {
    event.preventDefault()

    onSubmit({ ...inputs })
  }

  function handleChange(event) {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  function handleCheckboxChange(event) {
    setInputs({ ...inputs, [event.target.name]: Boolean(event.target.value)})
  }

  return (
    <form onSubmit={onSubmitHandle}>
      <InputField name="name" label="Project name" onChange={handleChange} value={inputs.name} required />
      <InputField name="description" label="Description" onChange={handleChange} value={inputs.description} />
      <Checkbox label="Initialize Readme" onChange={handleCheckboxChange} value={inputs.readme} name="readme" />
      <Button loading={working} type="submit">Submit</Button>
    </form>
  )
}

CodesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CodesForm
