import * as React from "react";
import PropTypes from "prop-types";

function Save(props) {
  const { size, style } = props

  return (
    <svg viewBox="0 0 512 512" width={size} height={size} {...style}>
      <path d="M346 422H166c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15zM346 302H166c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15zM346 362H166c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15zM121 0h210v130H121z" fill="currentColor" />
      <path d="M507.606 84.394l-80-80A15 15 0 00417 0h-56v145c0 8.284-6.716 15-15 15H106c-8.284 0-15-6.716-15-15V0H15C6.716 0 0 6.716 0 15v482c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15V95a15 15 0 00-4.394-10.606zM391 482H121V272h270v210z" fill="currentColor" />
    </svg>
  )
}

Save.propTypes = {
  size: PropTypes.number,
}

Save.defaultProps = {
  size: 16,
}

export default Save
