import useReduxState from "../hooks/useReduxState"
import {connect} from "react"

function TodoList(){
  
  const state= useReduxState();

  
  return <ul>{state.todos.map((todo)=>{
    return <li>{todo.text}</li>
  })}</ul>
  const TodoListContainer = connect(
  // config
    mapState
  )
  (
  // TodoList
  TodoList
  );

}












    // export default function TodoList(){
      
    //   const state= useReduxState();
    
      
    //   return <ul>{state.todos.map((todo)=>{
    //     return <li>{todo.text}</li>
    //   })}</ul>
    // }