import React from 'react'
import PropTypes from 'prop-types'
import Textfield from '@atlaskit/textfield'

function InputField(props) {
  const {
    name,
    type,
    value,
    onChange,
    placeholder,
    size,
    required,
    error,
    disabled,
  } = props

  return (
    <Textfield
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      isRequired={required}
      isInvalid={error}
      isDisabled={disabled}
      width={size}
      placeholder={placeholder}
    />
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  required: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
}

InputField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  size: null,
  required: false,
  error: false,
  disabled: false,
}

export default InputField
