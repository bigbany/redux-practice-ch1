import { useRef } from "react";

export default function TodoForm() {
  const inputRef = useRef();

  return(<div><input ref={input}/ ></div>)
}
