import { useState, useRef } from "react";
import "./App.css";

function App() {
  let [apples, setApples] = useState(0);
  let [persons, setPersons] = useState(0);

  const handleApplesChange = (e) => {
    setApples(parseInt(e.target.value, 10) || 0);
  };

  const handlePersonsChange = (e) => {
    setPersons(parseInt(e.target.value, 10) || 0);
  };

  const [result, setResult] = useState("");

  const calculateLCM = (a, b) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return (a * b) / gcd(a, b);
  };

  const sliceApples = () => {
    if (
      apples > 0 &&
      persons > 0 &&
      apples > persons &&
      apples % persons === 0
    ) {
      setResult(
        `Give ${apples / persons} apples to each of the ${persons} people.`
      );
      console.log(apples);
    } else if (apples > 0 && persons > 0 && apples > persons) {
      const wholeApples = apples - (apples % persons);
      const remainingApples = apples - wholeApples;
      const lcm = calculateLCM(remainingApples, persons);

      setResult(
        `Distribute ${wholeApples} apples among ${persons} person, giving ${wholeApples / persons} to each, then slice the remaining ${remainingApples} apples into ${lcm} equal parts and distribute ${lcm / persons} slices to each person`
      );
    } else if (apples > 0 && persons > 0) {
      const lcm = calculateLCM(apples, persons);
      setResult(
        `Cut the ${apples} apples into ${lcm} equal pieces and give ${lcm / persons} pieces to each of the ${persons} people.`
      );
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-0 justify-between">
        <header>
          <h1 className="  text-white font-black text-4xl bg-[#420801] p-4 text-center row-span-2">
            Apple Slicer
          </h1>
        </header>

        <section className="p-10 flex-1 bg-amber-200">
          <div className="container gap-5 grid p-2 w-full h-full">
            <div className="gap-5 grid sm:grid-cols-2 grid-cols-1">
              <div className="flex flex-col self-center text-center text-xl">
                <label htmlFor="apples">Number of Apples</label>
                <input
                  className="p-4 rounded-md font-semibold text-center font-mono text-2xl"
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Number of Apples"
                  value={apples}
                  onChange={handleApplesChange}
                  onClick={(e) => {
                    e.target.select();
                  }}
                />
              </div>
              <div className="flex flex-col self-center text-center text-xl">
                <label htmlFor="persons">Number of Persons</label>
                <input
                  className="  p-4 rounded-md font-semibold text-center font-mono text-2xl"
                  type="number"
                  min={0}
                  max={100}
                  placeholder="Number of Persons"
                  value={persons}
                  onChange={handlePersonsChange}
                  onClick={(e) => {
                    e.target.select();
                  }}
                />
              </div>
            </div>
            <button
              className="bg-[#E02209] hover:bg-[#420801] px-10 rounded-md mx-auto mb-4 border-0 cursor-pointer text-[#f8da80] font-bold"
              type="button"
              onClick={sliceApples}
            >
              Slice the Apples
            </button>
            <div className="output p-4 rounded-md bg-white text-center font-mono text-2xl">{result}</div>
          </div>
        </section>

        <footer className="place-items-end">
          <p className="bg-[#420801] p-4 text-center text-[#FF6500]">
            Made by Sono & Dhunu with love
            <span className="material-symbols-outlined relative top-2">favorite</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
