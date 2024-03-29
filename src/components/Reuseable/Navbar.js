import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white ">
        <Link to="/" className="navbar-brand ml-5">
          <img src={Logo} alt="logo goes here" width="40px" />
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="text-white">menu</span>
        </button>
      </nav>
    )
  }
}
