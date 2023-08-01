import React from 'react'
import '../styles/index.scss'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import CrochetPatternList from '../components/CrochetPatterns/CrochetPatternsList'
import Button from '../components/Button/ButtonElement'
import ImageElement from '../components/image'

import { IconContext } from 'react-icons'
import { FaEuroSign, FaGift, FaHeart, FaStar } from 'react-icons/fa6'


const IndexPage = () => {
  return (
    <Layout>
    <main className='homepage'>
      <section className='header padding'>
        <video id='bg-video' autoPlay loop muted playsInline>
          <source src='/images/video2.mp4' type='video/mp4' />
        </video>
        <div className='header__brand'>
          <h1 className='hidden-title'>Solmuteoriaa</h1>
          <ImageElement img='/solmuteoriaa_logo_256.png' alt='Solmuteoriaa' classname='header__brand__logo' />
          <p className='header__brand__description'>
            Crochet to relax. Crochet to learn. Crochet to be awesome.
          </p>
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
          <div className='commissions-section__container__item card-hover'>
            <IconContext.Provider value={{ className:'commissions-section__container__item__icon', title:'Star' }}>
              <FaStar />
            </IconContext.Provider>
            <h3 className='commissions-section__container__item__heading'>
              Uniqueness
            </h3>
            <p className='commissions-section__container__item__details'>
              Guaranteed to be the only one of its kind!
            </p>
          </div>

          <div className='commissions-section__container__item card-hover'>
            <IconContext.Provider value={{ className:'commissions-section__container__item__icon', title:'Gift' }}>
              <FaGift />
            </IconContext.Provider>
            <h3 className='commissions-section__container__item__heading'>
              Perfect gift
            </h3>
            <p className='commissions-section__container__item__details'>
              Recipient would never expect it! Can't find it from any store.
            </p>
          </div>

          <div className='commissions-section__container__item card-hover'>
            <IconContext.Provider value={{ className:'commissions-section__container__item__icon', title:'Heart' }}>
              <FaHeart />
            </IconContext.Provider>
            <h3 className='commissions-section__container__item__heading'>
              Softness
            </h3>
            <p className='commissions-section__container__item__details'>
              Huggable. Loveable. Gives warmth and joy.
            </p>
          </div>
          
          <div className='commissions-section__container__item card-hover'>
            <IconContext.Provider value={{ className:'commissions-section__container__item__icon', title:'Euro' }}>
              <FaEuroSign />
            </IconContext.Provider>
            <h3 className='commissions-section__container__item__heading'>
              Value
            </h3>
            <p className='commissions-section__container__item__details'>
              I only take projects I enjoy. Not in it for the money.
            </p>
          </div>
        </div>

        <Button to='/commissions' title='See examples or request a commission' subclass='large' />
      </section>

      {/* Reviews Section */}
      <section className='reviews padding'>
        {/*<h2 className='reviews__heading'>REVIEWS</h2>*/}

      </section>
    </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO />
