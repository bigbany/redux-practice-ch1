// import useReduxState from "../hooks/useReduxState"
import {connect} from "react-redux";

function TodoList({todos}){
  
  // const state= useReduxState(); 
  return (<ul>{todos.map((todo)=>{
    return <li>{todo.text}</li>
  })}</ul>);
}
  const mapStateToProps = (state)=> {
    return {
      todos: state.todos,
    };
  };
  const mapDispatchToProps = (dispatch)=> {
    return {
      
    };
  };

  const TodoListContainer = connect(
    // config
      mapStateToProps,
      mapDispatchToProps
    )
    (
    // TodoList
    TodoList
    );
  export default TodoListContainer;
 













    // export default function TodoList(){
      
    //   const state= useReduxState();
    
      
    //   return <ul>{state.todos.map((todo)=>{
    //     return <li>{todo.text}</li>
    //   })}</ul>
    // }