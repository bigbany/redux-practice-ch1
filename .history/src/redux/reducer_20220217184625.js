import { combineReducers } from "redux";
import todos from "./todos";

const reducer = combineReducers({
  todos: todosReducer, 
  filter: filterReducer});

  export default reducer;