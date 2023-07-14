import React from 'react'
import '../BasicWebPage.scss'

import CrochetPatternServices from './CrochetPatternsServices'

import { useEffect } from 'react'
import particles from '../../particlejs-config'

function CrochetPatters() {

  useEffect(() => {
    // eslint-disable-next-line no-undef
    tsParticles.load('particles', particles)
  })

  return (
    <>
      <div className='page'>
        <div className='page__header padding' id='particles'>
          <h1 className='page__header__heading'>Crochet Patterns</h1>
          <p className='page__header__description'>These are crochet patterns</p>
        </div>
        <div className='page__body'>
           <CrochetPatternServices />
        </div>

      </div>
    </>
  )
}

export default CrochetPatters