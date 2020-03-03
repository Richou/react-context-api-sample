import React from 'react'

import CodeEditor from '.'

import 'codemirror/mode/javascript/javascript'

export default {
  title: 'CodeEditor',
  component: CodeEditor,
}

export const SimpleCodeEditor = () => {
  const [value, setValue] = React.useState('')

  return (
    <CodeEditor lang="text/javascript" onChange={setValue} value={value} />
  )
}
