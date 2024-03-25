import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

// all the poages
import Home from './pages/Home/Home'
import { Membership } from './pages/Membership/Membership'
import { OurStory } from './pages/OurStory/OurStory'
import ContacUs from './pages/ContacUs/ContacUs'
import WriteBlog from './pages/WriteBlog/WriteBlog'


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Membership' element={<Membership />} />
        <Route path='/OurStory' element={<OurStory />} />
        <Route path='/ContacUs' element={<ContacUs />} />
        <Route path='/WriteBlog' element={<WriteBlog />} />
      </Routes>
    </div>
  )
}
