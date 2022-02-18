import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
  function click(){
    dispatch
  }
}
