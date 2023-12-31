import React from 'react'
import Button from '../../components/Button/ButtonElement'

const Card = ({pattern}) => {
  const link = `/crochet-patterns/${pattern.patternId}`
  return (
    <div className='crochetPatternsList__container__item card-hover'>
      <div className='crochetPatternsList__container__item__illustration'>
        <img src={`/images${pattern.cardImg}`} alt={pattern.titleImgAlt} className='crochetPatternsList__container__item__illustration__image' />
      </div>
      <div className='crochetPatternsList__container__item__description'>
        <h3 className='crochetPatternsList__container__item__description__heading'>
          {pattern.title}
        </h3>
        <p className='crochetPatternsList__container__item__description__details'>
          {pattern.cardDescription}
        </p>
        <Button to={link} title='See the pattern' align='center' />
      </div>
    </div>
  )
}

export default Card