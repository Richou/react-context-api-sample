import React from 'react'
import Recipes from "./recipes";
import { compose } from "recompose";
import { useRecipesContext } from "..";
import { withRecipesDependenciesInjection } from "../context/recipes.di";
import { withRouter } from "react-router";
import { FullscreenDialog } from "../../../core/ui";
import RecipesForm from "./recipes-form";
import { RECIPES_HOME } from "../../castanea.routes";

function RecipesWrapper({ recipesService, history }) {
  const [recipesContext, dispatch] = useRecipesContext()
  const [createRecipePopupOpen, setCreateRecipePopupOpen] = React.useState(false)
  const [working, setWorking] = React.useState(false)

  const getRecipes = React.useCallback(async () => {
    const response = await recipesService.findRecipes()

    dispatch({
      type: 'recipes:set',
      payload: response,
    })
  }, [])

  React.useEffect(() => {
    getRecipes()
  }, [])

  const createRecipeHandler = React.useCallback(() => {
    setCreateRecipePopupOpen(true)
  }, [])

  const onCreateNewRecipeHandler = React.useCallback(async (recipe) => {
    console.log('new recipe', recipe)

    setWorking(true)
    const createdRecipe = await recipesService.createRecipe(recipe.title)

    setWorking(false)
    setCreateRecipePopupOpen(false)
    history.push(`${RECIPES_HOME.url}/${createdRecipe.id}`)
  }, [recipesService, history])

  return (
    <>
      <Recipes
        recipes={recipesContext.recipes}
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
