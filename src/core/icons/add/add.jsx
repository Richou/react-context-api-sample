import * as React from 'react'
import PropTypes from 'prop-types'

/**
 * <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 *
 * @param props
 * @returns Add Icon
 * @constructor
 */
function Add(props) {
  const { size, style } = props

  return (
    <svg height={size} viewBox="0 0 448 448" width={size} {...style}>
      <path
        d="M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
        fill="currentColor"
      />
    </svg>
  )
}

Add.propTypes = {
  size: PropTypes.number,
}

Add.defaultProps = {
  size: 16,
}

export default Add
