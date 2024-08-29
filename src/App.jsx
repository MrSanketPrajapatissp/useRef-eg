import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const inputFunction = useCallback(() => {
    console.log("hii there");
  }, []);

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo((inputFunction) => {
  console.log("Child Render");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});

ButtonComponent.displayName = ButtonComponent;

export default App;
