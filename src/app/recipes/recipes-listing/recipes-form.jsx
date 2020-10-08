import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "../../../core/ui";

function RecipesForm({ onSubmit, working }) {
  const onSubmitHandler = React.useCallback((event) => {
    event.preventDefault()

    onSubmit()
  }, [onSubmit])

  return (
    <form onSubmit={onSubmitHandler}>
      <Button loading={working} type="submit">Submit</Button>
    </form>
  )
}

RecipesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  working: PropTypes.bool,
}

export default RecipesForm
