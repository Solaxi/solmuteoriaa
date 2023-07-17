import React, { useEffect } from 'react'
import SEO from '/src/components/SEO'
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
      <SEO
        titleAdd='Commission a Crochet Projcet'
        description='Commission a unique huggable soft gift that recipient would never expect! Guaranteed to be the only one of its kind!'
        url='/commissions'
        image='/solmuteoriaa_og.jpg'
      />

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
