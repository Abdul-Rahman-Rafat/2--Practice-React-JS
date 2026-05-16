import { useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { sum, sub, divide, mult } from "./features/Calcs/calcSlice";

export default function Calc() {
  //redux
  const calcResult = useSelector((state) => state.calc.result);
  const dispatch = useDispatch();

  // console.log(calcResult);

  const [nums, setNums] = useState({
    Fnum: 0,
    Snum: 0,
    // Result: 0,
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
        // onClick={() => setNums({ ...nums, Result: nums.Fnum + nums.Snum })}
        onClick={() => {
          //redux
          console.log("dispatch sum reducer");
          return dispatch(sum({ fnum: nums.Fnum, snum: nums.Snum }));
        }}
      >
        Add
      </button>

      <button
        // onClick={() => setNums({ ...nums, Result: nums.Fnum - nums.Snum })}
        onClick={() => {
          console.log("dispatch sub reducer");
          return dispatch(sub({ fnum: nums.Fnum, snum: nums.Snum }));
        }}
      >
        Subtract
      </button>
      <button
        // onClick={() => setNums({ ...nums, Result: nums.Fnum * nums.Snum })}
        onClick={() => dispatch(mult({ fnum: nums.Fnum, snum: nums.Snum }))}
      >
        Multiply
      </button>
      <button
        // onClick={() => setNums({ ...nums, Result: nums.Fnum / nums.Snum })}
        onClick={() => dispatch(divide({ fnum: nums.Fnum, snum: nums.Snum }))}
      >
        Divide
      </button>
      {/* <p>Result: {nums.Result}</p> */}
      <p>Result: {calcResult}</p>
    </>
  );
}
