import React from 'react'

const Flag = ({of, height}) => <img src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${of}.svg`} alt={`Flag of ${of}`} height={height || '15'} />

export default Flag