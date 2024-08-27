import { useEffect, useState } from "react";
import axios from "axios";

function useTodos() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get().then((result) => {
      setTodos(result.data);
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return <div>{todos}</div>;
}

export default App;
