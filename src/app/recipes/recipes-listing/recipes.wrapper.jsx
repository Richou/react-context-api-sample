import React from 'react'
import Recipes from "./recipes";
import { compose } from "recompose";
import { useRecipesContext } from "..";
import { withRecipesDependenciesInjection } from "../context/recipes.di";
import { withRouter } from "react-router";
import { FullscreenDialog } from "../../../core/ui";
import RecipesForm from "./recipes-form";

function RecipesWrapper({ recipesService }) {
  const recipesContextHelper = useRecipesContext()
  const [createRecipePopupOpen, setCreateRecipePopupOpen] = React.useState(false)
  const [working, setWorking] = React.useState(false)

  const getRecipes = React.useCallback(async () => {
    const response = await recipesService.findRecipes()

    recipesContextHelper.dispatchRecipes(response)
  }, [recipesContextHelper, recipesService])

  React.useEffect(() => {
    getRecipes()
  }, [getRecipes])

  const createRecipeHandler = React.useCallback(() => {
    setCreateRecipePopupOpen(true)
  }, [])

  const onCreateNewRecipeHandler = React.useCallback(() => {
    setWorking(true)
  }, [])

  return (
    <>
      <Recipes
        recipes={recipesContextHelper.context().recipes}
        onCreateRecipeClicked={createRecipeHandler}
      />
      <FullscreenDialog handleClose={() => setCreateRecipePopupOpen(false)} open={createRecipePopupOpen} title="Ajouter une recette">
        <RecipesForm onSubmit={onCreateNewRecipeHandler} working={working} />
      </FullscreenDialog>
    </>
  )
}

export default compose(
  withRecipesDependenciesInjection,
  withRouter,
)(RecipesWrapper)
