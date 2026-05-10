// import { useState } from "react";

// import "./App.css";

// function App() {
//   const [Fnum, setFnum] = useState(0);
//   const [Snum, setSnum] = useState(0);
//   const [Result, setResult] = useState(0);

//   const handleAdd = () => setResult(Fnum + Snum);
//   const handleSubtract = () => setResult(Fnum - Snum);
//   const handleMultiply = () => setResult(Fnum * Snum);
//   const handleDivide = () => setResult(Fnum / Snum);

//   return (
//     <>
//       <label htmlFor="fnum">First Num</label>
//       <input
//         type="number"
//         id="fnum"
//         value={Fnum}
//         onChange={(e) => setFnum(Number(e.target.value))}
//       />

//       <label htmlFor="snum">Second Num</label>
//       <input
//         type="number"
//         id="snum"
//         value={Snum}
//         onChange={(e) => setSnum(Number(e.target.value))}
//       />

//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleSubtract}>Subtract</button>
//       <button onClick={handleMultiply}>Multiply</button>
//       <button onClick={handleDivide}>Divide</button>
//       <p>Result: {Result}</p>
//     </>
//   );
// }

// export default App;
//////
import { useState, useReducer } from "react";

import "./App.css";
import Calc from "./Calc";

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, result: state.Fnum + state.Snum };
    case "SUBTRACT":
      return { ...state, result: state.Fnum - state.Snum };
    case "MULTIPLY":
      return { ...state, result: state.Fnum * state.Snum };
    case "DIVIDE":
      return { ...state, result: state.Fnum / state.Snum };
    default:
      return state;
  }
};

function App() {
  const [Fnum, setFnum] = useState(0);
  const [Snum, setSnum] = useState(0);
  const [Result, setResult] = useState(0);

  const [state, dispatch] = useReducer(calculatorReducer, {
    Fnum: 0,
    Snum: 0,
    result: 0,
  });

  const handleAdd = () => dispatch({ type: "ADD" });
  const handleSubtract = () => dispatch({ type: "SUBTRACT" });
  const handleMultiply = () => dispatch({ type: "MULTIPLY" });
  const handleDivide = () => dispatch({ type: "DIVIDE" });

  return (
    <>
      <label htmlFor="fnum">First Num</label>
      <input
        type="number"
        id="fnum"
        value={Fnum}
        onChange={(e) => setFnum(Number(e.target.value))}
      />

      <label htmlFor="snum">Second Num</label>
      <input
        type="number"
        id="snum"
        value={Snum}
        onChange={(e) => setSnum(Number(e.target.value))}
      />

      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <p>Result: {state.result}</p>

      {/* <Calc /> */}
    </>
  );
}

export default App;
