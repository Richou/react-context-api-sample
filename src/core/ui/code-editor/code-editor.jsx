import React from 'react'
import PropTypes from 'prop-types'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import './code-editor.scss'

function CodeEditor({ lang, onChange, value }) {
  return (
    <CodeMirror
      options={{
        mode: lang,
        lineNumbers: true,
      }}
      value={value}
      onChange={(editor, data, value) => onChange(value)}
    />
  )
}

CodeEditor.propTypes = {
  lang: PropTypes.oneOf(['text/javascript', 'application/json']),
  onChange: PropTypes.func,
  value: PropTypes.string,
}

CodeEditor.defaultProps = {
  lang: 'text/javascript',
  onChange: () => {},
  value: '',
}

export default CodeEditor
