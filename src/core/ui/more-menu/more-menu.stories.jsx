import React from 'react'
import { action } from '@storybook/addon-actions'

import MoreMenu from '.'

export default {
  title: 'MoreMenu',
  component: MoreMenu,
}

export const SimpleMoreMenu = () => (
  <MoreMenu
    options={['One', 'Two', 'Three']}
    onClick={action('clicked')}
  />
)
