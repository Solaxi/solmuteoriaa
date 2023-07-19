import React from 'react'
import './ButtonElement.scss'

import { IconContext } from 'react-icons'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

import { NavLink } from 'react-router-dom'

function Button ({to, title, subclass, dir, align}) {
  const divClass = `buttonwrap ${align || 'center'}`
  const buttonClass = `button ${subclass || 'normal'}`

  return (
    <div className={divClass}>
      <NavLink to={to} className={buttonClass}>
        {!dir && title}
          <IconContext.Provider value={{title:'Arrow', size:'1em', className:'icon'}}>
            {!dir ? <FaArrowRight /> : <FaArrowLeft />}
          </IconContext.Provider>
        {dir && title}
      </NavLink>
    </div>
  )
}

export default Button