import React from 'react'
import './CheckboxElement.scss'

const Checkbox = ({ id, round, label, isChecked, onChange }) => {
  return (
    <label>
      <input id={id} type='checkbox' checked={isChecked} onChange={onChange} />
      <strong>R{round}:</strong> {label} <br/>
    </label>
  )
}

export default Checkbox