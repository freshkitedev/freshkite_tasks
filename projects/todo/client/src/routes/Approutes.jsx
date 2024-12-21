import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'

const Approutes = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Layout />} />
          </Routes>
      </div>
  )
}

export default Approutes