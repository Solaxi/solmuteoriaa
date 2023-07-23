import React, { useEffect } from 'react'
import SEO from '/src/components/SEO'
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
      <div className="marketplace__item">
        <img src={img} alt={title} className="marketplace__item__image" />
        <h2 className="marketplace__item__heading">{title}</h2>
        <p className="marketplace__item__desc">{desc}</p>
      </div>
      </>
    )
  }
  
  return (
    <>
      <SEO
        title='Marketplace'
        description='Original and cute crochet items for sale. Commissions are also available for unique gifts.'
        image='/solmuteoriaa_og.jpg'
      />

      <div className='page'>
        <div className='page__header padding' id='particles'>
          <h1 className='page__header__heading'>Market</h1>
          <p className='page__header__description'>Every piece is unique and sold "as is"</p>
        </div>
        <div className='cat-display padding'>

          <div className="marketplace">
            {marketplaceData.map(item => <MarketplaceItem key={item.title} img={item.img} title={item.title} desc={item.desc} />)}
          </div>

        </div>
      </div>
    </>
  )
}

export default Market
