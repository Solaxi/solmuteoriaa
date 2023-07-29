import React from 'react'

const ImageElement = ({img, alt, classname}) => 
  <img src={`/images${img}`} alt={alt || ''} className={classname || ''} placeholder='blur' />

export default ImageElement