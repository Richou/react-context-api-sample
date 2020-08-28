import React from 'react'
import PropTypes from 'prop-types'
import { CastaneaContainer, CastaneaHeader } from "../../../core/components/castanea";
import CastaneaMenu from "../../castanea.menu";
import { HOME_ROUTE } from "../../castanea.routes";

const breadcrumb = [
  {
    to: HOME_ROUTE.url,
    label: HOME_ROUTE.label,
  },
]

function Recipes({ recipes }) {
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>Codes Space</CastaneaHeader>
      <h1>Recipes</h1>
    </CastaneaContainer>
  )
}

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
}

Recipes.defaultProps = {
  recipes: [],
}

export default Recipes
