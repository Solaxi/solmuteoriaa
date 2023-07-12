import React from 'react';
import './HomePage.scss';

import headerLogo from '../../assets/solmuteoriaa_logo_256.png'
import video from '../../assets/video2.mp4'

import snowman from '../../assets/crochet-patterns/snowman/snowman.jpg'
import mouse from '../../assets/crochet-patterns/mouse/mouse.jpg'
import stella from '../../assets/crochet-patterns/stella/stella.jpg'

import { IconContext } from 'react-icons'
import { FaEuroSign, FaGift, FaHeart, FaStar } from 'react-icons/fa6'


function HomePage() {
  return (
    <main className='homepage'>
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
        <section className='services padding'>
          <h2 className='services__heading'>Free Crochet Patterns</h2>
          <div className='services__container'>

            <div className='services__container__item card-hover'>
              <div className='services__container__item__illustration'>
                <img src={snowman} alt='Snowman' className='services__container__item__illustration__image' />
              </div>
              <div className='services__container__item__description'>
                <h3 className='services__container__item__description__heading'>
                    Snowman
                </h3>
                <p className='services__container__item__description__details'>
                  I was asked to make the snowman from the movie The Snowman (1982). This is what I came up with.
                </p>
              </div>
            </div>

            <div className='services__container__item card-hover'>
              <div className='services__container__item__illustration'>
                <img src={mouse} alt='Mouse' className='services__container__item__illustration__image' />
              </div>
              <div className='services__container__item__description'>
                <h3 className='services__container__item__description__heading'>
                    Mouse
                </h3>
                <p className='services__container__item__description__details'>
                  So there I was, crocheting this cute little elephant... And I wondered what else is cute and has large ears. So I made a mouse.
                </p>
              </div>
            </div>

            <div className='services__container__item card-hover'>
              <div className='services__container__item__illustration'>
                <img src={stella} alt='Angry Birds Stella' className='services__container__item__illustration__image' />
              </div>
              <div className='services__container__item__description'>
                <h3 className='services__container__item__description__heading'>
                    Angry Birds Stella
                </h3>
                <p className='services__container__item__description__details'>
                  Having crochet all the other Angry Birds characters, I got a request to do Stella. As that pattern didn't exist, I made one.
                </p>
              </div>
            </div>

          </div>
        </section>
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
              No two items are the same
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
              Totally unexpected gift
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
              Self-made beats everything bought from a store
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
              I don't do this to get rich. 
            </p>
          </div>

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