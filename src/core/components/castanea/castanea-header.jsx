import React from 'react'
import { Link } from 'react-router-dom'

import './castanea-header.scss'

function CastaneaHeader({ breadcrumb = [], children }) {
  function renderBreadcrumbItem(item, key) {
    return (
      <li key={key}>
        {item.to && (<Link to={item.to}>{item.label}</Link>)}
        {!item.to && (<span>{item.label}</span>)}
      </li>
    )
  }

  return (
    <header className="castanea-header">
      {breadcrumb && (<nav className="castanea-breadcrumb-container">
        <ul>
          {breadcrumb.map(renderBreadcrumbItem)}
          {children && (<li>{children}</li>)}
        </ul>
      </nav>)}
    </header>
  )
}

export default CastaneaHeader
