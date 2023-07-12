import React from 'react';
import './CrochetPatternsServices.scss'

import snowman from '../../assets/crochet-patterns/snowman/snowman.jpg'
import mouse from '../../assets/crochet-patterns/mouse/mouse.jpg'
import stella from '../../assets/crochet-patterns/stella/stella.jpg'

function CrochetPatternServices() {
  return (
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
  )
}

export default CrochetPatternServices