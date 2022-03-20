import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Watch></Watch>
    </div>
  );
}

function Watch(){
  const [state, setState] = useState(0)
  const increaseState =() => setState(state + 1)
  return(
    <div style={{border: '2px solid purple',  margin:'20px'}}>
      <h2>Tis is my watch</h2>
        <h5>starts:{state} </h5>
        <button onClick={increaseState}>increase</button>
        <Display name="Starting" state={state}></Display>
    </div>
  )
}

function Display(props){
return(
  <div style={{border:'2px solid blue', margin:'30px'}}>
    <h2>name: {props.name}</h2>
    <h5> state: {props.state}</h5>
  </div>
)
}

export default App;
