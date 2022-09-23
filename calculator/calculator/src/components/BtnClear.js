import React from 'react'
import '../style-sheet/BtnClear.css'

const BtnClear = (props) => (
  <div className='btn-clear'
    onClick={props.handleClear}>
    {props.children}
  </div>
);

export default BtnClear;
