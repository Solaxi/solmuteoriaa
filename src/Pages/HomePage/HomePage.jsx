import React from 'react'
import SEO from '/src/components/SEO'
import './HomePage.scss'

import CrochetPatternServices from '/src/Pages/CrochetPatternsList/CrochetPatternsServices'
import Button from '/src/components/Button/ButtonElement'

import headerLogo from '/src/assets/solmuteoriaa_logo_256.png'
import video from '/src/assets/video2.mp4'

import { IconContext } from 'react-icons'
import { FaEuroSign, FaGift, FaHeart, FaStar } from 'react-icons/fa6'


function HomePage() {
  return (
    <main className='homepage'>
      <SEO
        title='Unconventional Crochet'
        description='Free Crochet Patterns for cute plushies and unconventional ideas. Crochet to relax. Crochet to learn. Crochet to be awesome.'
        image='/solmuteoriaa_og.jpg'
      />

      <section className='header padding'>
        <video id='bg-video' autoPlay loop muted playsInline>
          <source src={video} type='video/mp4' />
        </video>
        <div className='header__brand' id='tsparticles'>
          <h1 className='hidden-title'>Solmuteoriaa</h1>
          <img src={headerLogo} alt='Solmuteoriaa' className='header__brand__icon' />
          <p className='header__brand__description'>
            Crochet to relax. Crochet to learn. Crochet to be awesome.
          </p>
        </div>

      </section>

      {/* Wrapper for background */}
      <div className='wrapper-top'>
      
      {/* Stats Section */}

      {/* Services Section */}
        <CrochetPatternServices frontpage={true} />
      </div>
      
    {/* Features Section */}
      <section className='features padding'>
        <h2 className='features__heading'>COMMISSIONS</h2>
        
        <div className='features__container'>
          <div className='features__container__item card-hover'>
            <IconContext.Provider value={{ color: 'orange', size:'10em', title:'Star' }}>
            <div><FaStar /></div>
            </IconContext.Provider>
            <h3 className='features__container__item__heading'>
              Uniqueness
            </h3>
            <p className='features__container__item__details'>
              Guaranteed to be the only one of its kind!
            </p>
          </div>

          <div className='features__container__item card-hover'>
            <IconContext.Provider value={{ color: 'orange', size:'10em', title:'Gift' }}>
            <div><FaGift /></div>
            </IconContext.Provider>
            <h3 className='features__container__item__heading'>
              Perfect gift
            </h3>
            <p className='features__container__item__details'>
              Recipient would never expect it! Can't find it from any store.
            </p>
          </div>

          <div className='features__container__item card-hover'>
            <IconContext.Provider value={{ color: 'orange', size:'10em', title:'Heart' }}>
            <div><FaHeart /></div>
            </IconContext.Provider>
            <h3 className='features__container__item__heading'>
              Softness
            </h3>
            <p className='features__container__item__details'>
              Huggable. Loveable. Gives warmth and joy.
            </p>
          </div>
          
          <div className='features__container__item card-hover'>
            <IconContext.Provider value={{ color: 'orange', size:'10em', title:'Euro' }}>
            <div><FaEuroSign /></div>
            </IconContext.Provider>
            <h3 className='features__container__item__heading'>
              Value
            </h3>
            <p className='features__container__item__details'>
              I only take projects I enjoy. Not in it for the money.
            </p>
          </div>



        </div>

        <Button to='/commissions' title='See examples or request a commission' subclass='large' />
      </section>

    {/* Reviews Section */}
      <section className='reviews padding'>
        <h2 className='reviews__heading'>REVIEWS</h2>

      </section>

    </main>
  )  
}

export default HomePage