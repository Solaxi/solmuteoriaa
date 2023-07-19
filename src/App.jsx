import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

//Pages
import HomePage from './Pages/HomePage/HomePage'
import CrochetPatternsList from './Pages/CrochetPatternsList/CrochetPatternsList'
import CrochetPattern from './Pages/CrochetPattern/CrochetPattern'
import Market from './Pages/Market/Market'
import Commissions from './Pages/Commissions/Commissions'
import Footer from './components/Footer/Footer'

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
        <HelmetProvider>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/crochet-patterns' element={<CrochetPatternsList />} />
            <Route path='/crochet-patterns/:id' element={<CrochetPattern />} />
            <Route path='/crochet-patterns/:parent/:id' element={<CrochetPattern />} />
            <Route path='/commissions' element={<Commissions />} />
            <Route path='/market' element={<Market />} />
          </Routes>
          <Footer />
        </div>
        </HelmetProvider>
      )
    )
}

export default App