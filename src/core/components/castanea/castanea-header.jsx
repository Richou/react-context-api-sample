import React from 'react'

import './castanea-header.scss'
import { Link } from "react-router-dom";

function CastaneaHeader({ breadcrumb, children }) {
  function renderBreadcrumbItem(item, key) {
    return (
      <li>
        <Link to={item.to} key={key}>{item.label}</Link>
      </li>
    )
  }

  return (
    <header className="castanea-header">
      {breadcrumb && (<nav className="castanea-breadcrumb-container">
        <ul>
          {breadcrumb.map(renderBreadcrumbItem)}
        </ul>
      </nav>)}
      {children}
    </header>
  )
}

export default CastaneaHeader
