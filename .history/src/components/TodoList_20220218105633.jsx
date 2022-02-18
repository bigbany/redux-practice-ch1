import useReduxState from "../hooks/useReduxState"

export default function TodoList(){
  
  const state= useReduxState();

  
  return <ul>{state.todo.map=>{
    return
  }}</ul>
}