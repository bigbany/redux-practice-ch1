import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect(
  // config
  mapStateToProps,
  mapDispatchToProps
)(
  // TodoList
  TodoList
);

function TodoListContainer(){
  
}
export default TodoListContainer;
