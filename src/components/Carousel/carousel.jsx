import React, { useState } from 'react'
import './carousel.scss'
import ImageElement from '../image'

import { IconContext } from 'react-icons'
import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

const Carousel = ({images, imgClassname}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='carousel'>
      <ImageElement key={currentIndex} img={images[currentIndex]} classname={imgClassname} />
      <div className='slide_direction'>
        <IconContext.Provider value={{ color: 'orange', size:'5em', title:'Arrow left', className:'carouselIcon left' }}>
          <FaCircleArrowLeft onClick={handlePrevious} />
        </IconContext.Provider> 
        <IconContext.Provider value={{ color: 'orange', size:'5em', title:'Arrow right', className:'carouselIcon right' }}>
          <FaCircleArrowRight onClick={handleNext} />
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Carousel