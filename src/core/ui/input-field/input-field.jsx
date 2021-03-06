import React from 'react'
import PropTypes from 'prop-types'
import Textfield from '@atlaskit/textfield'

import './input-field.scss'

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
    label,
    className,
  } = props

  function renderLabel() {
    if (!required) return label
    return `${label} *`
  }

  return (
    <div className={className ? `${className} input-field-container` : 'input-field-container'}>
      {label && (<label htmlFor={name}>{renderLabel()}</label> )}
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
        autoComplete="off"
      />
    </div>
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
  label: PropTypes.string,
  className: PropTypes.string,
}

InputField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  size: null,
  required: false,
  error: false,
  disabled: false,
  label: null,
  className: null,
}

export default InputField
