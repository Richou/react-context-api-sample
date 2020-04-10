import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { ButtonCard } from '.'

export default {
  title: 'Button Card',
  component: ButtonCard,
  decorators: [withKnobs]
}

export const SimpleButtonCard = () => {
  const groupId = 'SIMPLE-BTN-01'

  return (
    <div style={{ margin: 10 }}>
      <ButtonCard
        onClick={action('clicked')}
        disabled={boolean("Disabled", false, groupId)}
      >
        {text('Label', 'Simple Button', groupId)}
      </ButtonCard>
    </div>
  )
}
