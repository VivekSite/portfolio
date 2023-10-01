import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const handleMenu = () => {
    document.getElementById('menubar').classList.toggle('openMenu');
  }
  
  return (
    <div>
      <div id="navbar">
        <div className="logo">MyWebsite</div>
        <div id="menubar" className=''>
          <NavLink to='/MyWebsite/' className='nav-link'>Home</NavLink>
          <NavLink to='/MyWebsite/skills' className='nav-link'>Skills</NavLink>
          <NavLink to='/MyWebsite/resume' className='nav-link'>Resume</NavLink>
          <NavLink to='/MyWebsite/projects' className='nav-link'>Projects</NavLink>
          {/* <NavLink to='/MyWebsite/services' className='nav-link'>Services</NavLink> */}
          <NavLink to='/MyWebsite/contact' className='nav-link'>Contact</NavLink>
        </div>
        <button id='menu' className='' onClick={handleMenu}>menu</button>
      </div>
    </div>
  )
}

export default Header;