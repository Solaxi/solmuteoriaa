import React from 'react'
import './CrochetPattern.scss'
import { useParams } from 'react-router-dom'

import Checkbox from '../../components/CheckboxElement'
import CrochetPatternsData from './data'

function CrochetPattern() {
  const params = useParams()
  const data = CrochetPatternsData.find((pattern) => pattern.url === params.id)

  const PatternContent = data.content.map((item, i) => {
    if (item.type === 'h2') {
      return <h2 key={i} className='heading-primary'>{item.content}</h2>
    }

    if (item.type === 'text') {
      return <p key={i}>{item.content}</p>
    }
    
    if (item.type === 'image') {
      return <div key={i} className='imgContainer'><img src={item.content} alt={item.alt} /></div>
    }

    if (item.type === 'list') {
      return <ul key={i}>{ item.content.map((listItem, j) => <li key={j}>{listItem}</li>) }</ul>
    }

    if (item.type === 'pattern') {
      const patternElements = item.content.map((listItem, j) => <Checkbox key={j} round={j+1} label={listItem} /> )

      return (
        <div key={i} className='pattern'>
          {patternElements}
        </div>
      )
    }

    return (<></>)
  })

  return (
    <div className='cp'>
      <div className='cp__header padding' id='particles'>
        <h1 className='cp__header__heading'>{data.title}</h1>
      </div>
      <div className='imgContainer padding'>
        <img src={data.titleImg} alt={data.titleImgAlt} />
      </div>
      <div className='cp__body padding'>
        <div className='document'>
          <p className='bold-head'>{data.description}</p>
          {PatternContent}
        </div>
      </div>
    </div>
  )
}

export default CrochetPattern