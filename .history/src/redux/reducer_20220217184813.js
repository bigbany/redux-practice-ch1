import { combineReducers } from "redux";
import todos from "./todos";
import filter

const reducer = combineReducers({
  todos: todos, 
  filter: filter});

  export default reducer;