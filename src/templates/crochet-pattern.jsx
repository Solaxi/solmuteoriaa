import React, { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import '../styles/crochet-pattern.scss'

import CrochetPatternSubCateogories from '../components/CrochetPatterns/CrochetPatternSubCategories'
import Checkbox from '../components/Checkbox/CheckboxElement'
import InfoBox from '../components/InfoBox/InfoBox'
import Button from '../components/Button/ButtonElement'
import ImageElement from '../components/image'

function CrochetPatternPage({ pageContext: { patternId } }) {
  const [data, setData] = useState([])
  const [checkedBoxes, setCheckedBoxes] = useState([])

  useEffect(() => {
    import(`/static/json/crochetpatterns/${patternId}.json`)
    .then(jsonData => {
      setData(jsonData)
    })
  }, [patternId])

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`${patternId}-checkboxes`))
    if (items) {
      setCheckedBoxes(items)
    }
  }, [patternId])

  function handleChange(e) {
    const newCheckedBoxes = e.target.checked 
      ? checkedBoxes.concat([e.target.id])
      : checkedBoxes.filter(box => box !== e.target.id)

    setCheckedBoxes(newCheckedBoxes)
    localStorage.setItem(`${patternId}-checkboxes`, JSON.stringify(newCheckedBoxes))
  }

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
        return <div key={i} className='imgContainer'><ImageElement img={item.content} alt={item.alt} /></div>
      }

      //unordered list
      case 'list': {
        return <ul key={i}>{ item.content.map((listItem, j) => <li key={j}>{listItem}</li>) }</ul>
      }

      //pattern containing checkboxes
      case 'pattern': {
        const startRow = item.startrow ? Number(item.startrow) : 1
        const patternElements = item.content.map((patternItem, j) => {
          const checkboxId = `${patternId}-${i}-${j+startRow}`
          return <Checkbox key={j} 
            id={checkboxId} 
            round={j+startRow} 
            label={patternItem}
            isChecked={checkedBoxes.some(box => box === checkboxId)}
            onChange={e => handleChange(e)} />
        })

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
        return <CrochetPatternSubCateogories key={i} cats={item.content} />
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
    <Layout>
    <div className='page'>
      <div className='page__header padding'>
        <h1 className='page__header__heading'>{data.title}</h1>
        <p className='page__header__description'>Free Crochet Pattern</p>
      </div>
      <div className='imgContainer'>
        {data.titleImg && <ImageElement img={data.titleImg} alt={data.title} />}
      </div>
      <div className='page__body padding'>
        <div className='document'>
          <p className='bold-description'>{data.description}</p>
          {data.content && data.content.map((item, i) => readContent(item, i))}
          <br/>
          <Button to='/crochet-patterns' title='Show all free crochet patterns' dir='left' />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default CrochetPatternPage

export const Head = ({ location, params, data, pageContext }) => 
<SEO 
  title={`Solmuteoriaa - ${pageContext.title} Crochet Pattern`}
  description={pageContext.description}
  image={pageContext.image}
  pathname={location.pathname}
/>
