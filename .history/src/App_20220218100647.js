import logo from './logo.svg';
import './App.css';
import {}

function App({store}) {
  const [state, setState] = useState(store.getState());


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    </div>
  );
}

export default App;
