import React from 'react'

import RichTextEditor from '.'

export default {
  title: 'RichTextEditor',
  component: RichTextEditor,
}

export const SimpleRichTextEditor = () => {
  const [value, setValue] = React.useState('')
  const onChangeHandle = React.useCallback((value) => {
    setValue(value)
  }, [])

  return (
    <RichTextEditor value={value} onChange={onChangeHandle} />
  )
}
