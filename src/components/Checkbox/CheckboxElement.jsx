import React from 'react'
import './CheckboxElement.scss'

const Checkbox = ({ round, label, value, onChange }) => {
  return (
    <label>
      <input type='checkbox' checked={value} onChange={onChange} />
      <strong>R{round}:</strong> {label} <br/>
    </label>
  )
}

export default Checkbox