import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useContext } from "react";
import { addTodo } from "./redux/actions";
import ReduxContext from "./contexts/ReduxContext";
import useReduxDispatch from "./hooks/useReduxDispatch";
import useReduxState from "./hooks/useReduxState";
import TodoList from "./components/TodoList";



function App() {
  const state = useReduxState();
  const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {JSON.stringify(state)}
        <button onClick={click}>추가</button>
      </header>
      <TodoList/>
      {/* <TodoForm/> */}
    </div>
  );

  function click() {
    dispatch(addTodo("todo"));
    // store.dispatch(addTodo("todo"));
  }
}

export default App;
