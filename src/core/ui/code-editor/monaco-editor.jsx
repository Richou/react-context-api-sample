import React from 'react'
import PropTypes from 'prop-types'
import Editor from 'react-monaco-editor'

import './monaco-editor.scss'

function MonacoEditor({ lang, onChange, value }) {
  const options = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: false,
    codeLens: false,
  }

  return (
    <Editor
      language={lang}
      value={value}
      onChange={(one, two) => onChange(one)}
      theme="vs-dark"
      options={options}
    />
  )
}

MonacoEditor.propTypes = {
  lang: PropTypes.oneOf(['javascript', 'json', 'sql', 'java']),
  autocomplete: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

MonacoEditor.defaultProps = {
  lang: 'text/javascript',
  onChange: () => {},
  autocomplete: false,
  value: '',
}

export default MonacoEditor
