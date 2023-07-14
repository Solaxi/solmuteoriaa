import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//Pages
import HomePage from './Pages/HomePage'
import CrochetPatternsList from './Pages/CrochetPatternsList'
import CrochetPattern from './Pages/CrochetPattern'
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
            <Route path="/" element={<HomePage />} />
            <Route path="/crochet-patterns" element={<CrochetPatternsList />} />
            <Route path="/crochet-patterns/:id" element={<CrochetPattern />} />
          </Routes>
          <Footer />
        </div>
      )
    )
}

export default App