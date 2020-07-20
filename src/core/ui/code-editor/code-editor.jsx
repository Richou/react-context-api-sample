import React from 'react'
import PropTypes from 'prop-types'
import { Controlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/anyword-hint.js'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'
import 'codemirror/theme/dracula.css'

import './code-editor.scss'

function CodeEditor({ lang, onChange, value, autocomplete, dark }) {
  return (
    <CodeMirror
      options={{
        mode: lang,
        lineNumbers: true,
        theme: (dark) ? 'dracula' : 'default',
        tabSize: 2,
      }}
      value={value}
      onChange={() => {}}
      onKeyUp={((editor, event) => {
        if (event.keyCode > 64 && event.keyCode < 91) {
          editor.showHint({ completeSingle: false })
        }
      })}
      onBeforeChange={(editor, data, value) => {
        if (data.origin) {
          onChange(value)
        }
      }}
    />
  )
}

CodeEditor.propTypes = {
  lang: PropTypes.oneOf(['text/javascript', 'application/json', 'text/x-sql', 'text/x-markdown']),
  autocomplete: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  dark: PropTypes.bool,
}

CodeEditor.defaultProps = {
  lang: 'text/javascript',
  onChange: () => {},
  autocomplete: false,
  value: '',
  dark: false,
}

export default CodeEditor
