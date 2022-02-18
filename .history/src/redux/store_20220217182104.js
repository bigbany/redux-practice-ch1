// ch0104 - createStore
import { createStore } from "redux";
import { todoApp  from "./reducers";

const store = createStore(todoApp);

export default store;
