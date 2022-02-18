// ch0103 - reducer
// state의 모습
// ['코딩', '점심 먹기'];

// import { ADD_TODO } from "./actions";

// const initialState = [];

// export function todoApp(previousState = initialState, action) {
// if(previousState=== undefined){
//   return [];
// }

//   if (action.type === ADD_TODO) {
//     return [...previousState, action.todo];
//   }
//   return previousState;
// }

// -----------------------------------------------------

// ch0105 combineReducers 수정하기
// state 구조를 변경할 것이다.
// [{text: '코딩', done: false},{text: '코딩2', done: true}]
// filters 추가
// {todos:[{text: '코딩', done: false},{text: '코딩2', done: true}], filters:ALL }

import { ADD_TODO, COMPLETE_TODO } from "./actions";

const initialState = {todos:[], filter: 'ALL'};

export function todoApp(previousState = initialState, action) {
  // if(previousState=== undefined){
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return {todos: [...previousState.todos, { text: action.text, done: false }],filter}
  }


  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo , done: true };
      }
      return todo;
    });
  }
}
