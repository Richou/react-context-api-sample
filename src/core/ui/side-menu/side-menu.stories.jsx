import React from 'react'

import SideMenu from '.'
import { MemoryRouter } from "react-router";

export default {
  title: 'SideMenu',
  component: SideMenu
}

export const OnlyTopSideMenu = () => {
  const menu = {
    top: [
      { label: 'Menu #1' },
      { label: 'Menu #2' },
      { label: 'Menu #3' },
    ]
  }

  return <MemoryRouter initialEntries={['/']}><SideMenu menu={menu} /></MemoryRouter>
}

export const FullSideMenu = () => {
  const menu = {
    top: [
      { label: 'Top Menu #1' },
      { label: 'Top Menu #2' },
      { label: 'Top Menu #3' },
      { label: 'Top Menu #4' },
    ],
    bottom: [
      { label: 'Bottom Menu #1' },
      { label: 'Bottom Menu #2' },
      { label: 'Bottom Menu #3' },
    ]
  }

  return <MemoryRouter initialEntries={['/']}><SideMenu menu={menu} /></MemoryRouter>
}
