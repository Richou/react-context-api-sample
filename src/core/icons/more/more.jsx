import * as React from "react";
import PropTypes from "prop-types";

function More(props) {
  const { size, style } = props

  return (
    <svg height={size} viewBox="-192 0 512 512" width={size} {...style}>
      <path
        d="M128 256c0 35.348-28.652 64-64 64S0 291.348 0 256s28.652-64 64-64 64 28.652 64 64zm0 0M128 64c0 35.348-28.652 64-64 64S0 99.348 0 64 28.652 0 64 0s64 28.652 64 64zm0 0M128 448c0 35.348-28.652 64-64 64S0 483.348 0 448s28.652-64 64-64 64 28.652 64 64zm0 0"
        fill="currentColor"
      />
    </svg>
  )
}

More.propTypes = {
  size: PropTypes.number,
}

More.defaultProps = {
  size: 16,
}

export default More
