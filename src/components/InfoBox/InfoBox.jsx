import React from 'react'
import ImageElement from '../image'
import './InfoBox.scss'

function InfoBoxColumn({column}) {
  return (
    <div className='infobox__column'>
    {column.content.map((item, i) => {
    
      switch (column.type) {
        case 'heading': 
          return <strong key={i}>{item}</strong>

        case 'image': 
          return <ImageElement key={i} img={item} alt='' classname='infobox__column__image' />

        default: 
          return <span key={i}>{item}</span>
      }

    })}
    </div>
  )
}

const InfoBox = ({columns}) => {
  return (
    <div className='infobox'>
      {columns.map((item, i) => <InfoBoxColumn key={i} column={item} /> )}
    </div>
  )
}

export default InfoBox