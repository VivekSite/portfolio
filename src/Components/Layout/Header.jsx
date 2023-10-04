import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const handleMenu = () => {
    document.getElementById('menubar').classList.toggle('openMenu');
  }
  
  return (
    <div>
      <div id="navbar">
        <div className="logo">VivekSahani</div>
        <div id="menubar" className=''>
          <NavLink to='/portfolio/' className='nav-link'>Home</NavLink>
          <NavLink to='/portfolio/skills' className='nav-link'>Skills</NavLink>
          <NavLink to='/portfolio/resume' className='nav-link'>Resume</NavLink>
          <NavLink to='/portfolio/projects' className='nav-link'>Projects</NavLink>
          {/* <NavLink to='/portfolio/services' className='nav-link'>Services</NavLink> */}
          <NavLink to='/portfolio/contact' className='nav-link'>Contact</NavLink>
        </div>
        <button id='menu' className='' onClick={handleMenu}>menu</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Header;