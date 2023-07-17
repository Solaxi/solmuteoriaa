import React, { useState, useEffect } from 'react'
import Button from '/src/components/Button/ButtonElement'

const Card = ({pattern}) => {
  const [card, setCard] = useState([])

  useEffect(() => {
    import(`../../assets/crochet-patterns/${pattern}.json`)
      .then(jsonData => {
        setCard(jsonData)
      })
  }, [pattern])

  const link = `/crochet-patterns/${pattern}`
  return (
    <div className='services__container__item card-hover'>
      <div className='services__container__item__illustration'>
        <img src={card.cardImg} alt={card.titleImgAlt} className='services__container__item__illustration__image' />
      </div>
      <div className='services__container__item__description'>
        <h3 className='services__container__item__description__heading'>
          {card && card.title}
        </h3>
        <p className='services__container__item__description__details'>
          {card && card.cardDescription}
        </p>
        <Button to={link} title='See the pattern'/>
      </div>
    </div>
  )
}

export default Card