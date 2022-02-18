import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App({store}) {
  const [state, setState] = useState(store.getState());

  useEffect(()=>{
    const un
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
