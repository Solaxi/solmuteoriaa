/* eslint-disable array-callback-return */
import React, { Suspense, lazy } from 'react';
import './CrochetPatternsServices.scss'
import Loader from '/src/components/Loader/LoaderElement'
import Button from '/src/components/Button/ButtonElement'

const Card = lazy(() => import('./CrochetPatternServicesCard'))

const patternsToShow = [
  'hey-duggee-frog',
  'snowman',
  'mouse',
  'angry-birds-stella',
  'hand-grenade',
  'hammer-plushie',
  'european-flags'
]

function CrochetPatternServices({frontpage}) {
  return (
    <section className='services padding'>
      <h2 className='services__heading'>FREE CROCHET PATTERNS</h2>
      <Suspense fallback={<Loader />}>
        <div className='services__container'>
          {patternsToShow.map((p, i) => {
              if (!frontpage || (frontpage && i < 4)) {
                return <Card key={p} pattern={p} />
              }
            }
          )}
        </div>
      </Suspense>
      
      {frontpage && <Button to='/crochet-patterns' title='Show all free crochet patterns' subclass='large' />}

    </section>
  )
}

export default CrochetPatternServices