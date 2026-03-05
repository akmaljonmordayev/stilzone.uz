import React from "react";
import "./Button.css";

function Button({
  btnText,
  bgColor = "linear-gradient(90deg,#3aa0e6,#2f86c9)",
  textColor = "#fff",
  w = "auto",
  p = "14px 28px",
  rounded = "40px",
  icon,
  image,
  iconPosition = "left",
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  shadow = true
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`btn ${shadow ? "btn-shadow" : ""} ${className}`}
      style={{
        width: w,
        padding: p,
        background: bgColor,
        color: textColor,
        borderRadius: rounded
      }}
    >
      {loading ? (
        <span className="btn-loading">Loading...</span>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="btn-icon">{icon}</span>
          )}
          {image && <img src={image} alt="btn" className="btn-img" />}

          {btnText && <span className="btn-text">{btnText}</span>}

          {icon && iconPosition === "right" && (
            <span className="btn-icon">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}


export default Button;
