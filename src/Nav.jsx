import React, {PropTypes} from 'react'

const NavBar = (props) => (
  <nav className='navbar'>
    <a href='/' className='navbar-brand'>panda</a>
    <span className='navbar-user'>{props.currUser}</span>
  </nav>
)

NavBar.propTypes = {
  currUser: PropTypes.string
}

export default NavBar
