/* eslint-disable array-callback-return */
import React, { Suspense, lazy } from 'react';
import './CrochetPatternsServices.scss'
import Loader from '/src/components/Loader/LoaderElement'

import { IconContext } from 'react-icons'
import { FaArrowRight } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Card = lazy(() => import('./CrochetPatternServicesCard'))

const patternsToShow = [
  'hey-duggee-frog',
  'snowman',
  'mouse',
  'angry-birds-stella'
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
      
      {frontpage && 
      <div className='commissionsbuttonwrap'>
        <NavLink to='/crochet-patterns' className='commissionsbutton'>
          Show all free crochet patterns
          <IconContext.Provider value={{title:'Arrow right', size:'1em', className:'icon'}}>
            <FaArrowRight />
          </IconContext.Provider>
        </NavLink>
        </div>
      }

    </section>
  )
}

export default CrochetPatternServices