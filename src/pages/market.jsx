import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/default-page.scss'
import '../styles/market.scss'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import Carousel from '../components/Carousel/carousel'

import { IconContext } from 'react-icons'
import { FaEuroSign } from 'react-icons/fa6'

const MarketplaceItem = ({item}) => {
  return (
    <>
      <div className='marketplace__item'>
        <Carousel images={item.images} imgClassname='marketplace__item__image' />
        <h2 className='marketplace__item__heading'>{item.title}</h2>
        <div className='marketplace__item__desc'>{item.desc}</div>
        <div className='marketplace__item__pricelabel'>
          <div className='marketplace__item__pricelabel__price'>{item.price} <IconContext.Provider value={{ title:'Euro', size:'2rem' }}><FaEuroSign /></IconContext.Provider></div>
        </div> 
      </div>
    </>
  )
}

const MarketPage = () => {
  const marketplaceData = useStaticQuery(graphql`
    query MarketplaceItemsQuery {
      allMarketplaceItemsJson {
        nodes {
          title
          images
          desc
          price
        }
      }
    }
  `)

  return (
    <Layout>
      <div className='page'>
        <div className='page__header padding'>
          <h1 className='page__header__heading'>Market</h1>
          <p className='page__header__description'>Every piece is unique and sold 'as is'</p>
        </div>
        
        <div className='page__body'>
          <section className='market padding'>
            <div className='inquiry'>
              Inquire about a purchase: <br/>
              <a href='mailto:solmuteoriaa@gmail.com'>solmuteoriaa@gmail.com</a> <br/>
              <img alt="Finnish" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg" /> / <img alt="Finnish" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" />
            </div>

            <div className='marketplace'>
              {marketplaceData.allMarketplaceItemsJson.nodes.map(item => <MarketplaceItem key={item.title} item={item} />)}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default MarketPage

export const Head = () => 
<SEO 
  title='Solmuteoriaa - Marketplace'
  description='Original and cute crochet items for sale. Commissions are also available for unique gifts.'
  pathname='/market'
/>