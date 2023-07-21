import React, { useState } from 'react'
import './CommissionForm.scss'

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('Send')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Submitting...')
    
    const formData = new FormData(event.target)
    console.log(formData)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    }).then((response) => {
      if (response.status === 200) {
        setName('')
        setEmail('')
        setMsg('')
        setFormStatus('Message sent!')
      } else {
        setFormStatus('Couldn\'t send message :(')  
      }
    }).catch(() => {
      setFormStatus('Couldn\'t send message :(')
    })
  }

  return (
    <form data-netlify='true' onSubmit={onSubmit}>
      <div className="form-field-wrapper">
        <label className="form-label" htmlFor="message">
          Story about your dreams and desires
        </label>
      </div>
      <div className="form-field-wrapper">
        <textarea id="message" value={msg} onChange={e => setMsg(e.target.value)} required />
      </div>
      <div className="form-field-wrapper">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="form-field-wrapper">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="form-field-wrapper">
        <button className="btn" type="submit">
          {formStatus}
        </button>
      </div>
    </form>
  )
}

export default ContactForm