import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { More as MoreIcon } from '../../icons'

import './more-menu.scss'

function MoreMenu({ options, onClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (option) => {
    setAnchorEl(null)
    console.log('option', option)
    onClick(option)
  }

  return (
    <div className="more-menu-container">
      <span className="more-menu-button" onClick={handleClick}>
        <MoreIcon size={12} />
      </span>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

MoreMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

MoreMenu.defaultProps = {
  options: [],
  onClick: () => {},
}

export default MoreMenu
