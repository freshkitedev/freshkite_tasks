import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

const Approutes = () => {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Layout />} />
          </Routes>
      </div>
  )
}

export default Approutes