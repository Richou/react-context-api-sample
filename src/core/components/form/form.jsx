import React from 'react'
import PropTypes from 'prop-types'

function Form({ dataModel, onSubmit }) {
  return (
    <form>

    </form>
  )
}

Form.propTypes = {
  dataModel: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Form
