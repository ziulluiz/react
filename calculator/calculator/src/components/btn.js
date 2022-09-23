import React from 'react';
import '../style-sheet/btn.css'


function Btn(props) {

  const isOperator = value => {

    return isNaN(value) && (value !== '.') && (value !== '=');
  };


  return (
    <div
      className={`btn-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick= {() => props.handleClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Btn;
