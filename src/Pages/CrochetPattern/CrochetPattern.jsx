import React, { useEffect, useState } from 'react'
import SEO from '/src/components/SEO'
import './CrochetPattern.scss'
import { useParams } from 'react-router-dom'

import CrochetPatternSubCateogories from './CrochetPatternSubCategories'
import Checkbox from '/src/components/Checkbox/CheckboxElement'
import InfoBox from '/src/components/InfoBox/InfoBox'
import Button from '/src/components/Button/ButtonElement'

const CrochetPattern = () => {
  const params = useParams()
  const [data, setData] = useState([])

  const parent = params.parent ? `${params.parent}/` : ''
  const json = `/src/assets/crochet-patterns/${parent}${params.id}.json`

  useEffect(() => {
    import(json /* @vite-ignore */).then(jsonData => {
        setData(jsonData)
      })
  }, [json])
  

  function readContent(item, i) {
    switch (item.type) {
      //heading
      case 'h2': {
        return <h2 key={i} className='heading-primary'>{item.content}</h2>
      }

      //basic text
      case 'text': {
        return <p key={i}>{item.content}</p>
      }
      
      //image
      case 'image': {
        return <div key={i} className='imgContainer'><img src={item.content} alt={item.alt} /></div>
      }

      //unordered list
      case 'list': {
        return <ul key={i}>{ item.content.map((listItem, j) => <li key={j}>{listItem}</li>) }</ul>
      }

      //pattern containing checkboxes
      case 'pattern': {
        const startRow = item.startrow ? Number(item.startrow) : 1
        const patternElements = item.content.map((listItem, j) => <Checkbox key={j} round={j+startRow} label={listItem} /> )

        return (
          <div key={i} className='pattern'>
            {patternElements}
          </div>
        )
      }

      //link
      case 'link': {
        return <a key={i} href={item.content}>{item.content}</a>
      }

      //subcateogry list of patterns
      case 'subcategory': {
        return <CrochetPatternSubCateogories key={i} parent={params.id} cats={item.content} />
      }

      //flag pattern specific section
      case 'infobox': {
        return <InfoBox key={i} columns={item.content} />
      }

      //button
      case 'button': {
        return <Button key={i} to={item.link} title={item.content} dir='left' />
      }

      default:
        return ''
    }
  }

  return (
    <>
    <SEO
      title={`Crochet Pattern - ${data.title}`}
      description={data.cardDescription}
      image={data.titleImg}
    />

    <div className='cp'>
      <div className='cp__header padding' id='particles'>
        <h1 className='cp__header__heading'>{data.title}</h1>
        <p className='cp__header__description'>Crochet Pattern</p>
      </div>
      <div className='imgContainer padding'>
        <img src={data.titleImg} alt={data.titleImgAlt} />
      </div>
      <div className='cp__body padding'>
        <div className='document'>
          <p className='bold-head'>{data.description}</p>
          {data.content && data.content.map((item, i) => readContent(item, i))}
        </div>
      </div>
    </div>
    </>
  )
}

export default CrochetPattern