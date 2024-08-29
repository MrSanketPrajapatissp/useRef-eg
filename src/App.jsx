import { useState } from "react";
import CardWrapper from "./CardWrapper";
import PropTypes from "prop-types";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Let me go to gym",
      content: "earphone",
    },
  ]);

  function changeTodo() {
    setTodos([{ id: 1, title: "Iambusy", content: "phone" }]);
  }

  return (
    <CardWrapper>
      <h2>{todos[0].title}</h2>

      <p>{todos[0].content}</p>

      <button onClick={changeTodo}>changeTodo</button>
    </CardWrapper>
  );
};

export default App;

PropTypes.App = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
