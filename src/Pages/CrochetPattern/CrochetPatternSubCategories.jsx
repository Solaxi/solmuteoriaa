import React from 'react'
import './CrochetPatternSubCateogories.scss'
import Button from '/src/components/Button/ButtonElement'

function CrochetPatternSubCateogories({parent, cats}) {

  const SubCategoryItem = ({id, title, img}) => {
    return (
      <div className="subcat__item">
        <span className='subcat__item__heading'>{title}</span>
        <img src={img} alt={title} className="subcat__item__image" />
        <Button to={`/crochet-patterns/${parent}/${id}`} title='See the pattern' classname='smallbutton' />
      </div>
    )
  }

  return (
  <div className='subcat'>
    {cats.map(item => <SubCategoryItem key={item.id} id={item.id} title={item.title} img={item.titleImg} />)}
  </div>
  )
}

export default CrochetPatternSubCateogories