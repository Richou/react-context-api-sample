import React from 'react'
import PropTypes from 'prop-types'

import { CastaneaContainer, CastaneaHeader } from '../../core/components/castanea'

import CastaneaMenu from '../castanea.menu'

import './home.scss'
import { HOME_ROUTE } from "../castanea.routes";

const breadcrumb = [
  {
    label: HOME_ROUTE.label,
  }
]

function Home({ codeProjects, recipes }) {
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb} />
      <div>Nombre de projets : {codeProjects.length}</div>
      <div>Nombre de recettes : {recipes.length}</div>
    </CastaneaContainer>
  )
}

Home.propTypes = {
  codeProjects: PropTypes.arrayOf(PropTypes.object),
  recipes: PropTypes.arrayOf(PropTypes.object),
}

Home.defaultProps = {
  codeProjects: [],
  recipes: [],
}

export default Home
