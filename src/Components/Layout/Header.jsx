import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const handleMenu = () => {
    document.getElementById('menubar').classList.toggle('openMenu');
  }
  
  return (
    <div>
      <div id="navbar">
        <div id="logo"><img src={require('./../../Images/logo.png')} alt="Vivek Sahani" /></div>
        <div id="menubar" className=''>
          <NavLink to='/portfolio/' className='nav-link'>Home</NavLink>
          <NavLink to='/portfolio/skills' className='nav-link'>Skills</NavLink>
          <NavLink to='https://drive.google.com/file/d/18bRXH_O0Hc0SpaxOgIr79XSWpx_xqpbq/view?usp=sharing' className='nav-link' target='_blank'>Resume</NavLink>
          <NavLink to='/portfolio/projects' className='nav-link'>Projects</NavLink>
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
