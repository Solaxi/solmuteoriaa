import React from 'react'
import '../styles/default.scss'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children, nonav, nofooter }) => {
  return (
    <div className='App'>
      {!nonav && <Navbar />}
      {children}
      {!nofooter && <Footer />}
    </div>
  )
}

export default Layout