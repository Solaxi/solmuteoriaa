import React, { useEffect } from 'react'
import '../BasicWebPage.scss'
import './Market.scss'

import particles from '../../particlejs-config'

import marketplaceData from '/src/assets/marketplaceData.json'

function Market() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    tsParticles.load('particles', particles)
  })

  const MarketplaceItem = ({img, title, desc}) => {
    return (
      <>
      <div className="discord__item">
        <img src={img} alt={title} className="discord__item__image" />
        <h2 className="discord__item__heading">{title}</h2>
        <p className="discord__item__desc">{desc}</p>
      </div>
      </>
    )
  }
  
  return (
    <>
      <div className='page'>
        <div className='page__header padding' id='particles'>
          <h1 className='page__header__heading'>Market</h1>
          <p className='page__header__description'>Every piece is unique and sold "as is"</p>
        </div>
        <div className='cat-display padding'>

          <div className="discord">
            {marketplaceData.map(item => <MarketplaceItem key={item.title} img={item.img} title={item.title} desc={item.desc} />)}
          </div>

        </div>
      </div>
    </>
  )
}

export default Market
