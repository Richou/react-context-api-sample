export default function RecipesService(firestore, authentication) {
  const recipesRepository = firestore.collection('recipes')

  async function findRecipes() {
    try {
      const { uid } = authentication.currentUser
      const recipesSnapshots = await recipesRepository.where('uid', '==', uid).get()

      return recipesSnapshots.docs.map(_mapRecipe)
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async function getRecipe(recipeId) {
    try {
      const recipeSnapshot = await recipesRepository.doc(recipeId).get()

      return _mapRecipe(recipeSnapshot)
    } catch (error) {
      return { error }
    }
  }

  function _mapRecipe(item) {
    const { uid, title, ingredients, process } = item.data()

    return { id: item.id, uid, title, ingredients, process }
  }

  return Object.freeze({
    findRecipes,
    getRecipe,
  })
}
