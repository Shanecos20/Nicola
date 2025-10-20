import React, { useState, useEffect } from 'react'
import './App.css'
import branchImage from './images/WeddingBranch.png'
import leftSideImage from './images/3EB7529F-.jpeg'
import rightSideImage from './images/d192e723-.jpeg'

function App() {
  const [daysUntil, setDaysUntil] = useState(0)

  useEffect(() => {
    const calculateDays = () => {
      const weddingDate = new Date('2026-10-24')
      const today = new Date()
      const difference = weddingDate - today
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24))
      setDaysUntil(days)
    }

    calculateDays()
    // Update countdown daily
    const interval = setInterval(calculateDays, 1000 * 60 * 60 * 24)
    
    return () => clearInterval(interval)
  }, [])
  return (
    <>
    <div className="side-image left">
      <img src={leftSideImage} alt="Left decorative" />
    </div>
    <div className="side-image right">
      <img src={rightSideImage} alt="Right decorative" />
    </div>

    <div className="main-content">
      <div className="container">
        <div className="watermark"></div>
        
        <div className="leaf-decoration">
          <img src={branchImage} alt="Wedding Branch Decoration" />
        </div>

        <div className="save-the-date">
          SAVE <span className="the">the</span><br />DATE
        </div>

        <div className="divider"></div>

        <div className="wedding-of">FOR THE WEDDING OF</div>

        <div className="names">Nicola & Connor</div>
        
        <div className="horizontal-line"></div>

        <div className="divider"></div>

        <div className="venue">
          Shearwater Hotel & Spa, Ballinasloe, Co. Galway
        </div>

        <div className="date">24 . 10 . 26</div>
      </div>

      {/* Mobile-only engagement photo below the invitation */}
      <div className="mobile-photos">
        <img src={leftSideImage} alt="Engagement photo" />
      </div>

      {/* Mobile-only countdown */}
      <div className="mobile-countdown">
        <div className="countdown-number">{daysUntil}</div>
        <div className="countdown-label">DAYS</div>
      </div>
    </div>
    </>
  )
}

export default App

