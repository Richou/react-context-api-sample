import React from 'react'

import { CastaneaContainer, CastaneaHeader } from '../../core/components/castanea'

import CastaneaMenu from '../castanea.menu'

import './home.scss'
import { HOME_ROUTE } from "../castanea.routes";

const breadcrumb = [
  {
    label: HOME_ROUTE.label,
  }
]

function Home() {
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader breadcrumb={breadcrumb} />
    </CastaneaContainer>
  )
}

export default Home
