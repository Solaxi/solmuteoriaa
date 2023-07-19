import React from 'react'
import './ButtonElement.scss'

import { IconContext } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa6'

import { NavLink } from 'react-router-dom'

function Button ({to, title, classname}) {
  return (
    <NavLink to={to} className={classname || 'button'}>
      {title} 
      <IconContext.Provider value={{title:'Arrow right', size:'1em', className:'icon'}}>
        <FaArrowRight />
      </IconContext.Provider>
    </NavLink>
  )
}

export default Button