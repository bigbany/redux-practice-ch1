import useReduxState from "../hooks/useReduxState"
import {connect} from "react-redux";

function TodoList(){
  
  const state= useReduxState();

  
  return (<ul>{state.todos.map((todo)=>{
    return <li>{todo.text}</li>
  })}</ul>);
}
  const mapStateToProps = (state)=> {
    return {
      
    };
  };
  const mapDispatchToProps = ()=> {};

  const TodoListContainer = connect(
    // config
      mapStateToProps,
      mapDispatchToProps
    )
    (
    // TodoList
    TodoList
    );
  
 













    // export default function TodoList(){
      
    //   const state= useReduxState();
    
      
    //   return <ul>{state.todos.map((todo)=>{
    //     return <li>{todo.text}</li>
    //   })}</ul>
    // }