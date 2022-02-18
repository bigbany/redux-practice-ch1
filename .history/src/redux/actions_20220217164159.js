// ch0102 - actions
// export const ADD_TODO = "ADD_TODO";

// export function addTodo(todo) {
//   return { type: ADD_TODO, todo };
// }

// -------------------------------------------------------

// ch0105 combineReducers 수정하기

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO= "COMPLETE_TODO"

// return 객체의 형식
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

// return 객체의 형식
// {type: COMPLELTE_TODO, index: 3}
export function completeTodo(index){
  return {
    type: COMPLETE_TODO
    index,
  };
}