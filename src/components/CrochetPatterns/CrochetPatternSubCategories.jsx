import React from 'react'
import '../../styles/crochet-pattern-subcategories.scss'
import Button from '../../components/Button/ButtonElement'

function CrochetPatternSubCateogories({cats}) {

  const SubCategoryItem = ({id, title, img}) => {
    return (
      <div className="subcat__item card-hover">
        <span className='subcat__item__heading'>{title}</span>
        <img src={`/images${img}`} alt={title} className="subcat__item__image" />
        <Button to={`/crochet-patterns/${id}`} title='See the pattern' subclass='small' />
      </div>
    )
  }

  return (
  <div className='subcat'>
    {cats.map(item => <SubCategoryItem key={item.patternId} id={item.patternId} title={item.title} img={item.titleImg} />)}
  </div>
  )
}

export default CrochetPatternSubCateogories