import React from 'react'
import PropTypes from 'prop-types'
import CastaneaMenu from "../../castanea.menu";
import { CastaneaContainer, CastaneaHeader } from "../../../core/components/castanea";
import { HOME_ROUTE, RECIPES_HOME } from "../../castanea.routes";

const breadcrumb = [
  {
    to: HOME_ROUTE.url,
    label: HOME_ROUTE.label,
  },
  {
    to: RECIPES_HOME.url,
    label: RECIPES_HOME.label,
  },
]

function RecipesSheet({ recipe }) {
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{recipe.title}</CastaneaHeader>
    </CastaneaContainer>
  )
}

RecipesSheet.propTypes = {
  recipe: PropTypes.shape({}),
}

RecipesSheet.defaultProps = {
  recipe: {},
}

export default RecipesSheet
