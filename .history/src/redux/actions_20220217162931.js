// ch0102 - actions
// export const ADD_TODO = "ADD_TODO";

// export function addTodo(todo) {
//   return { type: ADD_TODO, todo };
// }

// -------------------------------------------------------

// ch0105 combineReducers 수정하기

export const ADD_TODO = "ADD_TODO";

export function addTodo(text) {
  return { type: ADD_TODO, todo };
}
