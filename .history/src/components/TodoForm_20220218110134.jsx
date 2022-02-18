import { useRef } from "react";

export default function TodoForm() {
  const inputRef = useRef();

  return(<div><input ref={inputRef}/ ><button>추가</button></div>)
}
