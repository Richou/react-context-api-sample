import React from 'react'

import { CastaneaContainer } from '../../core/components/castanea'

import CastaneaMenu from '../castanea.menu'

import './home.scss'

function Home() {
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <header>Dashboard</header>
    </CastaneaContainer>
  )
}

export default Home
