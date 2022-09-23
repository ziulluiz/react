import './App.css';
import Btn from './components/btn'
import Display from './components/display';
import BtnClear from './components/BtnClear';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [display, setInput] = useState('')
  const addInput = val => {
    setInput(display + val);
  };

  const result = () => {
    if (display){
      setInput(evaluate(display));
    }else {
      alert("Add values")
    }
  }

  return (
    <div className='App'>
      <div className='cal-container'>
        <Display display={display} />
        <div className='row'>
          <Btn handleClic={addInput}>1</Btn>
          <Btn handleClic={addInput}>2</Btn>
          <Btn handleClic={addInput}>3</Btn>
          <Btn handleClic={addInput}>+</Btn>
        </div>
        <div className='row'>
          <Btn handleClic={addInput}>4</Btn>
          <Btn handleClic={addInput}>5</Btn>
          <Btn handleClic={addInput}>6</Btn>
          <Btn handleClic={addInput}>-</Btn>
        </div>
        <div className='row'>
          <Btn handleClic={addInput}>7</Btn>
          <Btn handleClic={addInput}>8</Btn>
          <Btn handleClic={addInput}>9</Btn>
          <Btn handleClic={addInput}>*</Btn>
        </div>
        <div className='row'>
          <Btn handleClic={result}>=</Btn>
          <Btn handleClic={addInput}>0</Btn>
          <Btn handleClic={addInput}>.</Btn>
          <Btn handleClic={addInput}>/</Btn>
        </div>
        <div className='row'>
          <BtnClear handleClear={() => setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
