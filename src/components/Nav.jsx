import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Nav() {
  return (
    <header>
      <Link>
        <h1>Crud App</h1>
      </Link>
      <nav>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </header>
  );
}

export default Nav