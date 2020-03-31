import React from 'react'

import Tooltip from '.'
import { text, withKnobs } from "@storybook/addon-knobs";
import { Button } from '..'

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [withKnobs]
}

export const LeftTooltip = () => {
  return (<Tooltip content={text('Tooltip value', 'Hello Tooltip !')}><Button onClick={() => {}}>Hover me !</Button></Tooltip>)
}
