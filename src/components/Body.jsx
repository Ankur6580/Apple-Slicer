import React, { useState } from "react";

function Body() {
  let [apples, setApples] = useState(0);
  let [persons, setPersons] = useState(0);
  const [result, setResult] = useState("");

  const calculateLCM = (a, b) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return (a * b) / gcd(a, b);
  };

  const sliceApples = () => {
    if (apples > 0 && persons > 0 && apples > persons) {
      const wholeApples = persons;
      const remainingApples = apples - persons;
      const lcm = calculateLCM(remainingApples, persons);
      
      setResult(
        `Give ${wholeApples} apples to ${persons} people, then slice the remaining ${remainingApples} apples into ${lcm} equal parts and distribute ${lcm / persons} slices to each person`
      );
    } else if (apples > 0 && persons > 0) {
      const lcm = calculateLCM(apples, persons);
      setResult(`LCM of ${apples} and ${persons} is ${lcm}`);
    }
  };

  return (
    <>
      <div className="bg-slate-200 h-3/5 w-full p-4 flex flex-col items-center justify-center gap-5">
        <div className="flex gap-3 justify-center">
          <input
            className="h-20 w-52 p-4 rounded-md font-semibold"
            type="number"
            placeholder="Number of Apples"
            onChange={
              (setApples = (e) => {
                apples = e.target.value;
              })
            }
          />
          <input
            className="h-20 w-52 p-4 rounded-md font-semibold"
            type="text"
            placeholder="Number of Persons"
            onChange={
              (setPersons = (e) => {
                persons = e.target.value;
              })
            }
          />
        </div>
        <button
          className="bg-slate-400 p-4 rounded-md font-semibold"
          type="button"
          onClick={sliceApples}
        >
          Slice the Apples
        </button>
        <div className="output h-20 min-w-48 p-4 rounded-md bg-white">
          {result}
        </div>
      </div>
    </>
  );
}

export default Body;
