import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import './App.css';

function App() {
  useEffect(() => {
    window.addEventListener('message', m => {
      const { data } = m
      if (data && data) {
        handleMessage(data)
      }
    })

    return () => {
      window.removeEventListener('message', () => {})
    }
  }, [])

  const handleMessage = message => {
    const { type, data } = message
      switch (type) {
        case 'ROUTER':
          window.location.href = data.path
          break
        default:
          break
      }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/react/page1" element={<Page1/>} />
        <Route exact path="/react/page2" element={<Page2/>} />
      </Routes>
    </Router>
  );
}

export default App;
