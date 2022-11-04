import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="task-app">
      <div className='tasks'>
        <h1>My tasks</h1>
        <List/>
      </div>
    </div>
  );
}

export default App;
