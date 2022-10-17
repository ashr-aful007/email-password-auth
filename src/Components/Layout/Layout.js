import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
     <nav className=' mb-5 d-flex gap-4'>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
     </nav>
     <Outlet></Outlet>
    </div>
  )
}

export default Layout