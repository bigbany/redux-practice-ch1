import { connect } from "react-redux";
import Todo

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