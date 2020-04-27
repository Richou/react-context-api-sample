import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@atlaskit/tooltip'
import ActivityIcon from '@atlaskit/icon/glyph/activity'
import { withRouter } from 'react-router'

import './side-menu.scss'

function SideMenu({ menu, history, location }) {

  function computeItemClass(url) {
    if (url === location.pathname || location.pathname.startsWith(`${url}/`)) return 'active'
    return ''
  }

  function buildMenuItem({ label, url, icon: Icon = ActivityIcon }, index) {
    return (
      <Tooltip content={label} position="right" key={index}>
        <li className={computeItemClass(url)} onClick={() => history.push(url)}>
          <Icon />
        </li>
      </Tooltip>
    )
  }

  return (
    <nav className="side-menu-content">
      <ul className="side-menu-top">
        {menu.top.map((menuItem, index) => buildMenuItem(menuItem, `top-${index}`))}
      </ul>
      {menu.bottom && (
        <ul className="side-menu-bottom">
          {menu.bottom.map((menuItem, index) => buildMenuItem(menuItem, `bot-${index}`))}
        </ul>
      )}
    </nav>
  )
}

SideMenu.propTypes = {
  menu: PropTypes.shape({
    top: PropTypes.arrayOf(PropTypes.object),
    bottom: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

export default withRouter(SideMenu)
