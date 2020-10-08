import React from 'react'
import PropTypes from 'prop-types'
import { CastaneaContainer, CastaneaHeader } from "../../../core/components/castanea";
import CastaneaMenu from "../../castanea.menu";
import { HOME_ROUTE, RECIPES_HOME } from "../../castanea.routes";
import { Link } from "react-router-dom";

import './recipes.scss'
import { Button } from "../../../core/ui";

const breadcrumb = [
  {
    to: HOME_ROUTE.url,
    label: HOME_ROUTE.label,
  },
]

function Recipes({ recipes, onCreateRecipeClicked }) {

  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb}>{RECIPES_HOME.label}</CastaneaHeader>
      <nav className="recipes-actions">
        <Button onClick={onCreateRecipeClicked}>Ajouter une recette</Button>
      </nav>
      <div className="recipes-container">
        {recipes?.length > 0 && (
          <ul>
            {recipes.map((item, key) => (
              <li key={key}>
                <Link to={`${RECIPES_HOME.url}/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </CastaneaContainer>
  )
}

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object),
  onCreateRecipeClicked: PropTypes.func,
}

Recipes.defaultProps = {
  recipes: [],
  onCreateRecipeClicked: () => {},
}

export default Recipes
