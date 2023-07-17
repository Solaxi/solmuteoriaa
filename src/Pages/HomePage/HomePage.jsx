import React from 'react'
import SEO from '/src/components/SEO'
import './HomePage.scss'

import CrochetPatternServices from '../CrochetPatternsList/CrochetPatternsServices'

import headerLogo from '../../assets/solmuteoriaa_logo_256.png'
import video from '../../assets/video2.mp4'

import { IconContext } from 'react-icons'
import { FaEuroSign, FaGift, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa6'

import { NavLink } from 'react-router-dom'


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
      {/*
        <section className='stats padding'>
          <div className='video-container'>
            <a data-flickr-embed='true' href='https://www.flickr.com/photos/141823978@N06' title=''>
              <img src='https://live.staticflickr.com/65535/53015192564_89b47f3695_w.jpg' className='video-iframe' alt=''/>
            </a>
            <script async src='//embedr.flickr.com/assets/client-code.js' charSet='utf-8'></script>
          </div>

          <div className='stats__container'>
            <div className='stats__container__item'>
              <h2 className='stats__container__item__counter'>
                100
              </h2>
              <p className='stats__container__item__description'>
                Foo
              </p>
            </div>

            <div className='stats__container__border'></div>
            <div className='stats__container__item'>
              <h2 className='stats__container__item__counter'>
                100
              </h2>
              <p className='stats__container__item__description'>
                Bar
              </p>
            </div>
          </div>

        </section>
      */}

      {/* Services Section */}
        <CrochetPatternServices />

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

        <div className='commissionsbuttonwrap'>
        <NavLink to='/commissions' className='commissionsbutton'>
          See examples or request a commission
          <IconContext.Provider value={{title:'Arrow right', size:'1em', className:'icon'}}>
            <FaArrowRight />
          </IconContext.Provider>
        </NavLink>
        </div>
      </section>

    {/* Reviews Section */}
      <section className='reviews padding'>
        <h2 className='reviews__heading'>REVIEWS</h2>

      </section>

    </main>
  )  
}

export default HomePage