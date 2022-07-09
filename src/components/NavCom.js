import React from 'react'
import {Link} from 'react-router-dom'
const NavCom = () => {
  return (
    <header>
      <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </header>
  )
}

export default NavCom
