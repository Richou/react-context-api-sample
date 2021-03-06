import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { Button } from '.'

export default {
  title: 'Basic Button',
  component: Button,
  decorators: [withKnobs]
}

export const SimpleButton = () => {
  const groupId = 'SIMPLE-BTN-01'

  return (
    <Button
      onClick={action('clicked')}
      disabled={boolean("Disabled", false, groupId)}
      loading={boolean("Loading", false, groupId)}
    >
      {text('Label', 'Simple Button', groupId)}
    </Button>
  )
}
