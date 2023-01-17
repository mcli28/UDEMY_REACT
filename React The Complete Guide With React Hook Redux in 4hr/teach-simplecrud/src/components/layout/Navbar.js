import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          liNote
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
            <NavLink to="/favorites" className="navbar-item">Favorites</NavLink>
            <NavLink to="/projects" className="navbar-item">Projects</NavLink>
            <NavLink to="/reports" className="navbar-item">Reports</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar