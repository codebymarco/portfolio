import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <h1>codebymarco</h1>
    <div>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/skills">skills</Link>
      <Link to="/contact">contact</Link>
      <Link to="/apps">apps</Link>
    </div>
  </nav>  )
}

export default Navbar