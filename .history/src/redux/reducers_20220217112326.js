// state의 모습
// ['코딩', '점심 먹기'];

import { ADD_TODO } from "./actions";

function todoApp(previousState, action){
  if(previousState=== undefined){
    return [];
  }

  if(action.type === ADD_TODO){
    return[...previousState, {text: action}]
  }
  return previousState
}