import React from 'react'
import PropTypes from 'prop-types'
import { Button, InputField } from "../../core/ui";

function CodesForm({ onSubmit }) {
  const [inputs, setInputs] = React.useState({
    name: '',
    description: '',
  })

  function onSubmitHandle(event) {
    event.preventDefault()

    onSubmit({ ...inputs })
  }

  function handleChange(event) {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  return (
    <form>
      <InputField name="name" onChange={handleChange} value={inputs.name} />
      <InputField name="description" onChange={handleChange} value={inputs.description} />
      <Button onClick={onSubmitHandle}>Submit</Button>
    </form>
  )
}

CodesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CodesForm
