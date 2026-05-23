import { useState, useRef } from "react";

export default function PracComponent() {
  //   const [count, setCount] = useState(0);

  const [input, setInput] = useState("");

  const inputRef = useRef();

  function ConfirmInput() {
    console.log(inputRef.current.value);
    setInput(inputRef.current.value);
  }

  return (
    <>
      {/* <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setCount(count - 1)}>-</button> */}

      <input ref={inputRef} />

      <button onClick={ConfirmInput}>confirm</button>

      <h1>{input}</h1>
    </>
  );
}
