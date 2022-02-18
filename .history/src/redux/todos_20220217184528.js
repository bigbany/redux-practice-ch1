import { ADD_TODO, COMP } from "./actions";

export default function todos(previousState = todosInitialState, action) {
  // if(previousState=== undefined){
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }
  // previousState 객체가 꺼내지고 그중에 todos 만 덮어쓰기한다.

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return todo;
      })
    
  }

  return previousState;
}
