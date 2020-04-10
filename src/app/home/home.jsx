import React from 'react'

import { CastaneaContainer, CastaneaHeader } from '../../core/components/castanea'

import CastaneaMenu from '../castanea.menu'

import './home.scss'

function Home() {
  return (
    <CastaneaContainer menu={CastaneaMenu}>
      <CastaneaHeader>Dashboard</CastaneaHeader>
    </CastaneaContainer>
  )
}

export default Home
