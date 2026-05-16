// import { useReducer } from "react";

// const calculatorReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_FIRST":
//       return {
//         ...state,
//         Fnum: action.payload,
//       };

//     case "SET_SECOND":
//       return {
//         ...state,
//         Snum: action.payload,
//       };

//     case "ADD":
//       return {
//         ...state,
//         result: state.Fnum + state.Snum,
//       };

//     case "SUBTRACT":
//       return {
//         ...state,
//         result: state.Fnum - state.Snum,
//       };

//     case "MULTIPLY":
//       return {
//         ...state,
//         result: state.Fnum * state.Snum,
//       };

//     case "DIVIDE":
//       return {
//         ...state,
//         result: state.Fnum / state.Snum,
//       };

//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(calculatorReducer, {
//     Fnum: 0,
//     Snum: 0,
//     result: 0,
//   });

//   return (
//     <>
//       <label>First Num</label>

//       <input
//         type="number"
//         value={state.Fnum}
//         onChange={(e) =>
//           dispatch({
//             type: "SET_FIRST",
//             payload: Number(e.target.value),
//           })
//         }
//       />

//       <label>Second Num</label>

//       <input
//         type="number"
//         value={state.Snum}
//         onChange={(e) =>
//           dispatch({
//             type: "SET_SECOND",
//             payload: Number(e.target.value),
//           })
//         }
//       />

//       <button onClick={() => dispatch({ type: "ADD" })}>Add</button>

//       <button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>

//       <button onClick={() => dispatch({ type: "MULTIPLY" })}>Multiply</button>

//       <button onClick={() => dispatch({ type: "DIVIDE" })}>Divide</button>

//       <p>Result: {state.result}</p>
//     </>
//   );
// }

import { useState } from "react";

export default function App() {
  const [nums, setNums] = useState({
    Fnum: 0,
    Snum: 0,
    Result: 0,
  });

  return (
    <>
      <label htmlFor="fnum">First Num</label>
      <input
        type="number"
        id="fnum"
        value={nums.Fnum}
        onChange={(e) => setNums({ ...nums, Fnum: Number(e.target.value) })}
      />

      <label htmlFor="snum">Second Num</label>
      <input
        type="number"
        id="snum"
        value={nums.Snum}
        onChange={(e) => setNums({ ...nums, Snum: Number(e.target.value) })}
      />
      <button
        onClick={() => setNums({ ...nums, Result: nums.Fnum + nums.Snum })}
      >
        Add
      </button>
      <button
        onClick={() => setNums({ ...nums, Result: nums.Fnum - nums.Snum })}
      >
        Subtract
      </button>
      <button
        onClick={() => setNums({ ...nums, Result: nums.Fnum * nums.Snum })}
      >
        Multiply
      </button>
      <button
        onClick={() => setNums({ ...nums, Result: nums.Fnum / nums.Snum })}
      >
        Divide
      </button>
      <p>Result: {nums.Result}</p>
    </>
  );
}
