import Task from "./components/Task";
import './App.css';

function App() {
  return (
    <div className="task-app">
      <div className='tasks'>
        <h1>My tasks</h1>
        <Task text= 'learn react'/>
      </div>
    </div>
  );
}

export default App;
