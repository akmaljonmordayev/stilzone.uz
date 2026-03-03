import React from 'react'

function Button({btnText, bgColor, p, image, w, icon }) {
  return (
    <button style={{width:w, padding:p, backgroundColor:bgColor}}>
        {image && <img src={image} alt='btn-image'/>}
        {btnText}
        {icon ? icon : null}
    </button>
  )
}

export default Button