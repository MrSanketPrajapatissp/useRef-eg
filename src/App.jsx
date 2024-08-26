import { useMemo, useState } from "react";

function App() {
  const [counter, setCount] = useState(0);
  const [inputvalue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= inputvalue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputvalue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder="{find sum from 1 to n}"
      ></input>
      <br />
      Sum from 1 to {inputvalue} is {count}
      <br />
      <button
        onClick={function () {
          setCount(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
}

export default App;
