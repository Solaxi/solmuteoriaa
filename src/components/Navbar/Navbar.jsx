import React, { useState } from 'react'
import './Navbar.scss'

import { FaHouse, FaScissors, FaGift, FaBasketShopping } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/solmuteoriaa_logo_256.png'

function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const Close = () => setClick(false)

  const LinkItem = ({target, icon, title}) => {
    return (
      <>
      <li className='nav-item'>
        <NavLink to={target} end className={({ isActive }) => isActive ? 'active-links' : 'nav-links'} onClick={click ? handleClick : null}>
          {icon} &nbsp;&nbsp;{title}
        </NavLink>
      </li>
      </>
    )
  }

  return (
    <div>
      <div className={click ? 'main-container' : ''} onClick={() => Close()} />
      <nav className='navbar padding' onClick={(e) => e.stopPropagation()}>
        <div className='nav-container'>
          
          <NavLink to='/' className='nav-logo'>
            <img src={logo} alt="Solmuteoriaa" className='nav-logo__icon' />
          </NavLink>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <LinkItem target='/' icon={<FaHouse />} title='Home' />
            <LinkItem target='/crochet-patterns' icon={<FaScissors />} title='Free Crochet Patterns' />
            <LinkItem target='/market' icon={<FaBasketShopping />} title='Market' />
            <LinkItem target='/commissions' icon={<FaGift />} title='Commissions' />
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