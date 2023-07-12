import React from 'react'
import { useState } from 'react'
import './Navbar.scss'

import { NavLink } from 'react-router-dom'

import logo from '../../assets/solmuteoriaa_logo_256.png'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className='navbar padding' onClick={(e) => e.stopPropagation()}>
        <div className='nav-container'>
          
          <NavLink to='/' className='nav-logo'>
            <img src={logo} alt="Solmuteoriaa" className='nav-logo__icon' />
          </NavLink>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <NavLink to='/' end className={({ isActive }) => isActive ? 'active-links' : 'nav-links'} onClick={click ? handleClick : null}>
              Home
            </NavLink>
            </li>

            <li className='nav-item'>
            <NavLink to='/crochet-patterns' className={({ isActive }) => isActive ? 'active-links' : 'nav-links'} onClick={click ? handleClick : null}>
              Crochet Patterns
            </NavLink>
            </li>
          </ul>

          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar