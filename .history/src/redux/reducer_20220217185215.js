import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./reducers/filter";

const reducer = combineReducers({
  todos: todos,
  filter: filter,
});

export default reducer;
