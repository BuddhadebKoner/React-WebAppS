import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<OurStroy />} /> */}
        
      </Routes>
    </div>
  )
}
