import React from 'react'
import './ButtonElement.scss'

import { IconContext } from 'react-icons'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

import { Link } from 'gatsby'

function Button ({to, title, subclass, dir, align}) {
  const divClass = `buttonwrap ${align || 'center'}`
  const buttonClass = `button ${subclass || 'normal'}`

  return (
    <div className={divClass}>
      <Link to={to} className={buttonClass}>
        {!dir && title}
          <IconContext.Provider value={{title:'Arrow', size:'1em', className:'icon'}}>
            {!dir ? <FaArrowRight /> : <FaArrowLeft />}
          </IconContext.Provider>
        {dir && title}
      </Link>
    </div>
  )
}

export default Button