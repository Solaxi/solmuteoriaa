import React from 'react'
import './ButtonElement.scss'

import { IconContext } from 'react-icons'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

import { NavLink } from 'react-router-dom'

function Button ({to, title, classname, dir}) {
  return (
    <NavLink to={to} className={classname || 'button'}>
      {!dir && title}
      <IconContext.Provider value={{title:'Arrow right', size:'1em', className:'icon'}}>
        {!dir ? <FaArrowRight /> : <FaArrowLeft />}
      </IconContext.Provider>
      {dir && title}
    </NavLink>
  )
}

export default Button