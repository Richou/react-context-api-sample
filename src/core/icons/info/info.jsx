import React from 'react'
import { Icon } from 'react-icons-kit'
import { info as InfoIcon } from 'react-icons-kit/icomoon/info'
import PropTypes from "prop-types";

const Info = ({ size }) => <Icon size={size} icon={InfoIcon} />

Info.propTypes = {
  size: PropTypes.number,
}

Info.defaultProps = {
  size: 16,
}

export default Info
