import React, { useEffect } from 'react'
import '../BasicWebPage.scss'
import './Commissions.scss'

import particles from '../../particlejs-config'

function Commissions() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    tsParticles.load('particles', particles)
  })

  return (
    <>
      <div className='page'>
        <div className='page__header padding' id='particles'>
          <h1 className='page__header__heading'>Commissions</h1>
          <p className='page__header__description'>Commissions are <strong>OPEN</strong></p>
        </div>
        <div className='page__body'>
          
          <section className='services padding'>
      
            <div className='services__container'>
              Proper commissions page coming up. Until then, email solmuteoriaa@gmail.com.
            </div>
           </section>

        </div>
      </div>
    </>
  )
}

export default Commissions
