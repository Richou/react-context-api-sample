import React from 'react'
import PropTypes from 'prop-types'
import { Controlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/sql-hint'

import './code-editor.scss'

function CodeEditor({ lang, onChange, value, autocomplete }) {
  return (
    <CodeMirror
      options={{
        mode: lang,
        lineNumbers: true,
        extraKeys: {
          'Ctrl-Space': 'autocomplete'
        }
      }}
      value={value}
      onChange={() => {}}
      onBeforeChange={(editor, data, value) => {
        if (data.origin) {
          onChange(value)
        }
      }}
    />
  )
}

CodeEditor.propTypes = {
  lang: PropTypes.oneOf(['text/javascript', 'application/json', 'text/x-sql']),
  autocomplete: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

CodeEditor.defaultProps = {
  lang: 'text/javascript',
  onChange: () => {},
  autocomplete: false,
  value: '',
}

export default CodeEditor
