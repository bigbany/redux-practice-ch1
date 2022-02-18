// state의 모습
// ['코딩', '점심 먹기'];

import { addTodo,A} from "./actions";

const initialState = [];

export function todoApp(previousState= initialState, action){
  // if(previousState=== undefined){
  //   return [];
  // }

  if(action.type === ADD_TODO){
    return[...previousState, {text: action.text}]
  }
  return previousState
}