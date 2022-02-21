import logo from './logo.svg';
import './App.css';
import './heroes/heroes';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <h2 className="user">User choice is:</h2>
        <h2 className="comp">Computer choice is:</h2>
        <button href="#" className="btn" onClick={()=> {console.log('clicked')}}>Rock</button>
        <button href="#" className="btn" onClick={()=> {console.log('clicked')}}>Paper</button>
        <button href="#" className="btn" onClick={()=> {console.log('clicked')}}>Scissorc</button>
      </div>
    </div>
  );
}

export default App;
