import React from 'react'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'

export default function App() {
  return (
    <div>
      <Navbar />
      <Shop />
      <AboutUs />
      <Footer />
    </div>
  )
}
