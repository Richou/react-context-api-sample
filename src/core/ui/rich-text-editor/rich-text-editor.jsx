import React from 'react'
import PropTypes from 'prop-types'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
]


function RichTextEditor({ value, onChange }) {
  const [innerValue, setInnerValue] = React.useState(initialValue)
  const editor = React.useMemo(() => withHistory(withReact(createEditor())), [])
  return (
    <Slate
      editor={editor}
      value={innerValue}
      onChange={value => setInnerValue(value)}
    >
      <Editable placeholder="Enter some plain text..." />
    </Slate>
  )
}

RichTextEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

RichTextEditor.defaultProps = {
  value: '',
  onChange: () => {},
}

export default RichTextEditor
