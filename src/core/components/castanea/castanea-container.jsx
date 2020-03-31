import React from 'react'
import PropTypes from 'prop-types'
import SideMenu from '../../ui/side-menu'

import './castanea-container.scss'

function CastaneaContainer({ menu, className, children }) {
  return (
    <div className="castanea-container">
      <SideMenu menu={menu}/>
      <div className={className ? `${className} castanea-content` : 'castanea-content'}>
        {children}
      </div>
    </div>
  )
}

CastaneaContainer.propTypes = {
  menu: PropTypes.shape({
    top: PropTypes.arrayOf(PropTypes.object),
    bottom: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  className: PropTypes.string,
}

CastaneaContainer.defaultProps = {
  className: '',
}

export default CastaneaContainer
