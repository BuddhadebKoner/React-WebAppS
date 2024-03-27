import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import FeedSection from './Components/FeedSection/FeedSection'

export default function App() {
  return (
    <>
      <div className="full-app-container">
        <Navbar />
        <Hero />
        <FeedSection />
        <div>App</div>
      </div>
    </>
  )
}
