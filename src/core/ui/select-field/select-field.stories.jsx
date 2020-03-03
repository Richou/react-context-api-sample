import React from 'react'

import SelectField from '.'

export default {
  title: 'SelectField',
  component: SelectField
}

export const BasicSelectField = () => {
  const options = [
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
  ]

  return <SelectField options={options} placeholder="Choose one item" />
}
