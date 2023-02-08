import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Globe from './Globe'
import Cards from './Cards'

function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <div className="landing-page">
        <div className="globe">
          <Globe/>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Here you will find everything you need about <span className="text-gradient">Cybersecurity</span>
          </h1>
          <p className="primary-text">
            Cassiopée Project
          </p>
        </div>
      </div>
      <Cards/>
    </div>
  )
}

export default Home