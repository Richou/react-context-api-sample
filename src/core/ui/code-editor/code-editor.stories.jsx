import React from 'react'
import { select, withKnobs } from '@storybook/addon-knobs'

import CodeEditor from '.'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/sql/sql'

export default {
  title: 'CodeEditor',
  component: CodeEditor,
  decorators: [withKnobs],
}

export const SimpleCodeEditor = () => {
  const [value, setValue] = React.useState('')

  const modes = [
    'text/javascript',
    'application/json',
    'text/x-sql',
  ]
  const defaultMode = modes[0]
  const groupId = 'CODE-EDITOR-01'
  const languages = select('lang', modes, defaultMode, groupId)

  return (
    <CodeEditor lang={languages} onChange={setValue} value={value} />
  )
}
