import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import donuts from './images/donuts.jpg'
import { useState } from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandle = () => {
    setNumClicks(numClicks + 1);

  }

  const restarCount = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={donuts}
          alt= 'logo'
        />
      </div>
      <div className='main-cointainer'>
        <Counter numClicks= {numClicks} />
        <Button
          text='click'
          isClickBtn={ true }
          clickHandle={ clickHandle}/>
        <Button
          text='restart'
          isClickBtn={ false }
          clickHandle={restarCount} />
      </div>
    </div>
  );
}

export default App;
