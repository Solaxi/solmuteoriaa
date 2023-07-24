import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/default-page.scss'
import '../styles/market.scss'
import SEO from '../components/SEO'
import Layout from '../components/layout'

const MarketplaceItem = ({img, title, desc}) => {
  return (
    <>
      <div className="marketplace__item">
        <img src={`/images${img}`} alt={title} className="marketplace__item__image" />
        <h2 className="marketplace__item__heading">{title}</h2>
        <p className="marketplace__item__desc">{desc}</p>
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
          img
          desc
        }
      }
    }
  `)

  return (
    <Layout>
      <div className='page'>
        <div className='page__header padding'>
          <h1 className='page__header__heading'>Market</h1>
          <p className='page__header__description'>Every piece is unique and sold "as is"</p>
        </div>
        <div className='cat-display padding'>

          <div className="marketplace">
            {marketplaceData.allMarketplaceItemsJson.nodes.map(item => <MarketplaceItem key={item.title} img={item.img} title={item.title} desc={item.desc} />)}
          </div>

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