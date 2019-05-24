import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './HeaderStyle.css'

class Header extends Component {
  renderLinks() {
    if (!this.props.auth) {
      return (
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
})

export default connect(
  mapStateToProps,
  {}
)(Header)
