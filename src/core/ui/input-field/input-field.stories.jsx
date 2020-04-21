import React from 'react'
import { action } from '@storybook/addon-actions'

import InputField from '.'

export default {
  title: 'InputField',
  component: InputField
}

export const BasicTextFields = () => {
  const [textValue, setTextValue] = React.useState('')

  function handleChange(event) {
    action('clicked')
    setTextValue(event.target.value)
  }

  return (
    <React.Fragment>
      <InputField name="small" onChange={handleChange} value={textValue} placeholder="This is a small InputField" size="small" />
      <InputField name="full-width" onChange={handleChange} value={textValue} placeholder="This is a full width InputField" />
      <InputField name="error" onChange={handleChange} error value={textValue} placeholder="The field has error" />
      <InputField name="disabled" onChange={handleChange} disabled value={textValue} placeholder="The field is disabled" />
      <InputField name="labelled" label="I'm a label for this field" onChange={handleChange} value={textValue} placeholder="The field has label" />
    </React.Fragment>
  )
}

export const PasswordInputField = () => {
  const [passwordValue, setPasswordValue] = React.useState('')

  function handleChange(event) {
    setPasswordValue(event.target.value)
  }

  return (
    <InputField type="password" onChange={handleChange} value={passwordValue} />
  )
}

export const NumberInputField = () => {
  const [numberValue, setNumberValue] = React.useState(0)

  function handleChange(event) {
    setNumberValue(event.target.value)
  }

  return (
    <InputField type="number" onChange={handleChange} value={numberValue} />
  )
}
