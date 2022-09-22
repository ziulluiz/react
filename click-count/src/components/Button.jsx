import React from 'react';
import '../style-sheet/Button.css'

function Button({ text, isClickBtn, clickHandle }) {

  return(
    <button
      className={ isClickBtn ? "click-btn" : 'restart-btn' }
      onClick={ clickHandle } >
      {text}
    </button>
  )
}

export default Button;
