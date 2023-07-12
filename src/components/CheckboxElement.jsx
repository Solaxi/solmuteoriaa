import React from 'react'

const Checkbox = ({ round, label, value, onChange }) => {
  return (
    <label>
      <input type='checkbox' checked={value} onChange={onChange} />
      <strong>R{round}:</strong> {label} <br/>
    </label>
  )
}

export default Checkbox