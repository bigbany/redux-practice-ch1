import { combineReducers } from "redux";
import todos from "./todos";

const reducer = combineReducers({
  todos: todos, 
  filter: filterReducer});

  export default reducer;