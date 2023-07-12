import React from 'react'
import './CrochetPatterns.scss'

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
      <div className='cp'>
        <div className='cp__header padding' id='particles'>
          <h1 className='cp__header__heading'>Crochet Patterns</h1>
          <p className='cp__header__description'>These are crochet patterns</p>
        </div>
        <div className='cp__body'>
          <div className='document'>
            <CrochetPatternServices />
          </div>
        </div>

      </div>
    </>
  )
}

export default CrochetPatters