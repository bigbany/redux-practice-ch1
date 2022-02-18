import { combineReducers } from "redux";

const reducer = combineReducers({
  todos: todosReducer, 
  filter: filterReducer});

  export default reducer;