import useReduxState from "../hooks/useReduxState"


function TodoList(){
  
  const state= useReduxState();

  
  return <ul>{state.todos.map((todo)=>{
    return <li>{todo.text}</li>
  })}</ul>
  const TodoListContainer = connect()();

}












    // export default function TodoList(){
      
    //   const state= useReduxState();
    
      
    //   return <ul>{state.todos.map((todo)=>{
    //     return <li>{todo.text}</li>
    //   })}</ul>
    // }