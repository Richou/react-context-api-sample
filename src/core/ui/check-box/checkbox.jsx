import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as AtlasKitCheckbox } from '@atlaskit/checkbox'

function Checkbox({ value, label, onChange, name, disabled, fullWidth, hasError }) {
  return (
    <AtlasKitCheckbox
      isFullWidth={fullWidth}
      isDisabled={disabled}
      isInvalid={hasError}
      label={label}
      value={value}
      onChange={onChange}
      name={name}
    />
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hasError: PropTypes.bool,
}

Checkbox.defaultProps = {
  disabled: false,
  fullWidth: false,
  hasError: false,
  name: 'checkbox-name',
}

export default Checkbox
