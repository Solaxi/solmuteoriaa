import React from 'react'
import '../styles/default.scss'
import '../styles/spinner.scss'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  /*const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('loader')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 700)
  }*/

  return (
    <>
    {/*
		<div id="loader" className="psoload">
			<div className="straight"></div>
			<div className="curve"></div>
			<div className="center"></div>
			<div className="inner"></div>
  </div>*/}

    {/*!loading && (*/}
    <div className='App'>
      <Navbar />
      {children}
      <Footer />
    </div>
    </>
  )
}

export default Layout