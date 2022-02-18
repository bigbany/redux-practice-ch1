import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo, completeTodo, showAll, showComplete } from "./redux/actions";
import ReduxContext from "./contexts/ReduxContext";

import {Provider} from "react-redux";
// ch0104 createStore 수업 부분
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// unsubscribe();
// store.dispatch(addTodo("coding-2"));
// store.dispatch(addTodo("read book-2"));
// store.dispatch(addTodo("eat-2"));
//--------------------------------------------------------------------------

// ch0105 combineReducers 수정 부분
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());
// store.dispatch(showAll());

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
