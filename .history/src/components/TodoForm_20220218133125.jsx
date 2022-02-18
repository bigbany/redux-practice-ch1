import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";
import {connect} from 'react-redux';

function TodoForm() {
  const inputRef = useRef();
  // const dispatch = useReduxDispatch();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
  function click() {
    // dispatch(addTodo(inputRef.current.value));
  }
}

const TodoFormContainer= connect(
  (state) => ({}),
  (dispatch)=> ({})

)(TodoForm);

export default TodoFormContainer;

// export default function TodoForm() {
//   const inputRef = useRef();
//   // const dispatch = useReduxDispatch();
//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={click}>추가</button>
//     </div>
//   );
//   function click() {
//     // dispatch(addTodo(inputRef.current.value));
//   }
// }
