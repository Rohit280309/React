import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(prop) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/first">{prop.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/first">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${prop.mode === 'light' ? 'dark':'light'}`}>
            <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.prototype = {
    title: PropTypes.string
}


