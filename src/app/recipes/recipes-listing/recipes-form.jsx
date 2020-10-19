import React from 'react'
import PropTypes from 'prop-types'
import { Button, InputField } from "../../../core/ui";

function RecipesForm({ onSubmit, working }) {
  const [recipeTitle, setRecipeTitle] = React.useState('')

  const onSubmitHandler = React.useCallback((event) => {
    event.preventDefault()

    onSubmit({ title: recipeTitle })
  }, [onSubmit, recipeTitle])

  const onRecipeTitleChanged = React.useCallback((event) => {
    setRecipeTitle(event.target.value)
  }, [setRecipeTitle])

  return (
    <form onSubmit={onSubmitHandler}>
      <InputField onChange={onRecipeTitleChanged} label="Recette" name="title" value={recipeTitle} />
      <Button loading={working} type="submit">Submit</Button>
    </form>
  )
}

RecipesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  working: PropTypes.bool,
}

export default RecipesForm
