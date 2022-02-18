import { combineReducers } from "redux";
import 

const reducer = combineReducers({
  todos: todosReducer, 
  filter: filterReducer});

  export default reducer;