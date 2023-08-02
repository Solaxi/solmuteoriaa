import React, { useState } from 'react'
import './ContactForm.scss'
import Flag from '../flag'

const ContactForm = ({formId, title, msgInstructions}) => {
  const [formStatus, setFormStatus] = useState('Send')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(msgInstructions)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Submitting...')

    const formData = new FormData(event.target)

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
    <form name={formId} onSubmit={onSubmit} netlify='true'>
      <input type='hidden' name='form-name' value={formId} />
      <input type='hidden' name='time' value={new Date().toLocaleString('fi-FI')} />

      <div className='form-field-wrapper'>
        <label className='form-label' htmlFor='message'>
          {title} &nbsp;&nbsp;<Flag of='FI'/> / <Flag of='GB'/>
        </label>
      </div>
      <div className='form-field-wrapper'>
        <textarea name='message' value={msg} onChange={e => setMsg(e.target.value)} required />
      </div>
      <div className='form-field-wrapper'>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input className='form-control' type='text' name='name' value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className='form-field-wrapper'>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input className='form-control' type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className='form-field-wrapper'>
        <button className='btn' type='submit'>
          {formStatus}
        </button>
      </div>
    </form>
  )
}

export default ContactForm