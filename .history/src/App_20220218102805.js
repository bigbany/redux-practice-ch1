import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';

function App({store}) {
  const [state, setState] = useState(store.getState());

  useEffect(()=>{
    const unsubscribe = store.subscribe(()=>{
      setState(store.getState());
    });
    return ()=> {
      unsubscribe();
    };
  }, [store])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {JSON.stringify(state)}
       <button></button>
      </header>
    </div>
  );
}

export default App;
