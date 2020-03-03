import React from 'react'
import PropTypes from 'prop-types'
import Select from '@atlaskit/select'

function SelectField(props) {
  const { options, placeholder } = props

  return (
    <Select
      options={options}
      placeholder={placeholder}
    />
  )
}

SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
}

SelectField.defaultProps = {
  options: [],
  placeholder: '',
}

export default SelectField
