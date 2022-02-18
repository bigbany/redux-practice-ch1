import { useSelector } from "react-redux";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// const TodoListContainer = connect(
//   // config
//   mapStateToProps,
//   mapDispatchToProps
// )(
//   // TodoList
//   TodoList
// );

function TodoListContainer(){
  // store에서 state를 꺼내서 props로 넘겨보내주는 일
  const todos =  useSelector((state)=>state.todos);

  return <TodoList todos={todos}/>;
}
export default TodoListContainer;
