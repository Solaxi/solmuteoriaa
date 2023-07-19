/* eslint-disable array-callback-return */
import React from 'react'
import './InfoBox.scss'

function InfoBoxColumn({column}) {
  return (
    <div className='infobox__column'>
    {column.content.map((item, i) => {
    
      switch (column.type) {
        case 'heading': 
          return <strong key={i}>{item}</strong>

        case 'image': 
          return <img key={i} src={item} alt='' className='infobox__column__image' />

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