import React from 'react'
import "./Header.css"
function Header() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="logo">
          <span className="qaychi">✂</span> 
          <span className="joni">QueueCut</span>
        </div>
        
        <div className="nav-links">
          <a href="#" className="active">Explore</a>
          <a href="#">Find Barbers</a>
          <a href="#">AI Styles</a>
        </div>
      </div>

      <div className="nav-right">
        <a className="login" href="#">Log in</a>
        <button className="join-btn">Join QueueCut</button>
      </div>
    </nav>
  )
}

export default Header