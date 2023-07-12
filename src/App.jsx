import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//Pages
import HomePage from './Pages/HomePage'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('loader')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 700)
  }


  return (
      !loading && (
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact end path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      )
    )
}

export default App