import React from 'react'
import './App.css'
import branchImage from './images/WeddingBranch.png'
import leftSideImage from './images/3EB7529F-.jpeg'
import rightSideImage from './images/d192e723-.jpeg'

function App() {
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
    </div>
    </>
  )
}

export default App

