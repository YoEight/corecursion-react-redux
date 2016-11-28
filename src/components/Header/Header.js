import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <header id="main-header" className="intro-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <div className="site-heading">
            <h1>Corecursion</h1>
            <hr className="small" />
            <span className="subheading">My peaceful travel towards functional programming enlightment.</span>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
