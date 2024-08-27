import { memo, useState } from "react";

function App() {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(counter + 1);
        }}
      >
        Counter {counter}
      </button>

      <ButtonComponent />
    </div>
  );
}

const ButtonComponent = memo(() => {
  console.log("Child Render");

  return (
    <div>
      <button>button Clicked</button>
    </div>
  );
});

ButtonComponent.displayName = "ButtonComponent";
export default App;
