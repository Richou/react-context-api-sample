import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [withKnobs]
}

export const SimpleButtonCard = () => {
  const groupId = 'SIMPLE-BTN-01'
  const [value, setValue] = React.useState(false)

  function handleChange(checked) {
    setValue(checked)
    action('clicked')
  }

  return (
    <div style={{ margin: 10 }}>
      <Checkbox
        value={value}
        onChange={handleChange}
        label={text('Label', 'Simple checkbox', groupId)}
        disabled={boolean("Disabled", false, groupId)}
        hasError={boolean("Error", false, groupId)}
      />
    </div>
  )
}
