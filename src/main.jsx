import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ScrollToTop from './components/scrollToTop'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router forceRefresh={true}>
    <ScrollToTop />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
)