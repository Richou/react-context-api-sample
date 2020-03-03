import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Basic Button',
  component: Button,
  decorators: [withKnobs]
}

export const SimpleButton = () => (
  <Button
    onClick={action('clicked')}
    disabled={boolean("Disabled", false)}
  >
    {text('Label', 'Simple Button')}
  </Button>
)
