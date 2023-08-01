import React from 'react'
import '../styles/default.scss'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout