import React from "react";
import "./Button.css";

function Button({ btnText, bgColor, p, image, w, icon }) {
  return (
    <button
      className="btn"
      style={{ width: w, padding: p, backgroundColor: bgColor }}
    >
      {image && <img src={image} alt="btn-image" className="btn-img" />}

      {btnText && <span className="btn-text">{btnText}</span>}

      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}

export default Button;
