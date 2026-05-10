import { useState } from "react";

export default function Calc() {
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
