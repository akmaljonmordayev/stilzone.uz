import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="logo">
          <span className="qaychi">✂</span>
          <span className="joni">QueueCut</span>
        </div>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Explore
          </NavLink>

          <NavLink
            to="/find-barber"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Find Barbers
          </NavLink>

          <NavLink
            to="/ai-styles"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            AI Styles
          </NavLink>
        </div>
      </div>

      <div className="nav-right">
        <NavLink to="/signin" className="login">
          Log in
        </NavLink>
       <NavLink to={"/signup"}>
         <button className="join-btn">Join QueueCut</button>
       </NavLink>
      </div>
    </nav>
  );
}

export default Header;