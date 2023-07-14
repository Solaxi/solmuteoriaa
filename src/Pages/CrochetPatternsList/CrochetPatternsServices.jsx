import React, { lazy } from 'react';
import './CrochetPatternsServices.scss'

const Card = lazy(() => import('./CrochetPatternServicesCard'))

const patternsToShow = [
  'snowman',
  'mouse',
  'angry-birds-stella'
]

function CrochetPatternServices() {
  return (
    <section className='services padding'>
      <h2 className='services__heading'>FREE CROCHET PATTERNS</h2>
      <div className='services__container'>

        {patternsToShow.map(p =>  
          <Card key={p} pattern={p} />
        )}

      </div>
    </section>
  )
}

export default CrochetPatternServices