import React, {useState} from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = ({isSticky}) => {
  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
    setNavBarActiveClass(active ? "is-active": "")
  }
  const navClassName = () => isSticky ? "navbar-sticky": "is-transparent"
     return (
      <nav
        className={`navbar ${navClassName()}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
            Majestic Sights
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/packages">
                Packages
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            {/* <div className="navbar-end has-text-centered">
            </div> */}
          </div>
        </div>
      </nav>
    )
}

export default Navbar
