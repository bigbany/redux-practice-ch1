import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import TodoForm from "../components/TodoForm";
import { useDispatch } from "react-redux";

// const TodoFormContainer =connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);



// export default TodoFormContainer;

export default function TodoFormContainer(){

  useDispatch

  function add(text){

  }

  return <TodoForm add={add}/ >
}