import { useState, useRef, useEffect } from "react";

function App() {
  const [incometax, setIncomeTax] = useState(20000);
  const divref = useRef();

  useEffect(() => {
    setTimeout(() => {
      divref.current.innerHTML = 10;
    }, 5000);
  }, []);

  return (
    <div>
      your income tax is : <div ref={divref}>{incometax}</div>
    </div>
  );
}

export default App;
