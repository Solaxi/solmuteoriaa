import React from 'react'
import '../styles/index.scss'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import CrochetPatternList from '../components/CrochetPatterns/CrochetPatternsList'
import Button from '../components/Button/ButtonElement'
import ImageElement from '../components/image'
import Flag from '../components/flag'
//import { Link } from 'gatsby-link'

import { useStaticQuery, graphql } from 'gatsby'

import { IconContext } from 'react-icons'
import { FaEuroSign, FaGift, FaHeart, FaStar } from 'react-icons/fa6'

const CommissionBox = ({title, desc, icon}) => {
  return (
    <div className='commissions-section__container__item card-hover'>
      <IconContext.Provider value={{ className:'commissions-section__container__item__icon' }}>
        {icon}
      </IconContext.Provider>
      <h3 className='commissions-section__container__item__heading'>{title}</h3>
      <p className='commissions-section__container__item__details'>{desc}</p>
    </div>
  )
}

const IndexPage = () => {
  const marketplaceImages = useStaticQuery(graphql`
    query MarketplaceItemsImagesQuery {
      allMarketplaceItemsJson {
        nodes {
          images
        }
      }
    }
  `)

  return (
    <Layout>
    <main className='homepage'>
      <section className='header padding'>
        <video id='bg-video' autoPlay loop muted playsInline>
          <source src='/images/video2.mp4' type='video/mp4' />
        </video>
        <div className='header__brand'>
          <h1 className='hidden-title'>Solmuteoriaa</h1>

          <div className='header__brand__madeby'>
            <div className='header__brand__madeby__description'>
              Made by <br/>
                <nobr>{new Date().getFullYear()-1983}-year-old dad</nobr><br/>
                <nobr>from <Flag of='FI'/></nobr>
            </div>
            {/*<Link to='/esko'>*/}
              <a href='https://twitter.com/EskoPoutanen'><ImageElement img='/esko.jpg' alt='' classname='header__brand__madeby__img' /></a>
            {/*</Link>*/}
          </div>

          <div className='header__brand__top'>
            <ImageElement img='/solmuteoriaa_logo_256.png' alt='Solmuteoriaa' classname='header__brand__top__img' />
            <div className='header__brand__top__description'>
              Crochet to relax<br/>
              Crochet to learn<br/>
              Crochet to be awesome<br/>
            </div>
          </div>
        </div>

      </section>

      {/* Wrapper for background */}
      <div className='wrapper-top'>
      
      {/* Services Section */}
        <CrochetPatternList frontpage={true} />
      </div>
      
    {/* Commissions Section */}
      <section className='commissions-section padding'>
        <h2 className='commissions-section__heading'>COMMISSIONS</h2>
        
        <div className='commissions-section__container'>
          <CommissionBox title='Uniqueness' desc='Guaranteed to be the only one of its kind!' icon={<FaStar />} />
          <CommissionBox title='Perfect gift' desc='Recipient would never expect it! Can`t find it from any store.' icon={<FaGift />} />
          <CommissionBox title='Softness' desc='Huggable. Loveable. Gives warmth and joy.' icon={<FaHeart />} />
          <CommissionBox title='Value' desc='I only take projects I enjoy. Not in it for the money.' icon={<FaEuroSign />} />
        </div>

        <Button to='/commissions' title='See examples or request a commission' subclass='large' />
      </section>

      {/* ForSale Section */}
      <section className='forsale padding'>
        <h2 className='forsale__heading'>FOR SALE</h2>
        <div className='forsale__list'>
          {marketplaceImages.allMarketplaceItemsJson.nodes.map((data, i) => <ImageElement img={data.images[0]} classname='card-hover' /> )}
        </div>
        <Button to='/market' title='Go to marketplace' subclass='large' />
      </section>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
