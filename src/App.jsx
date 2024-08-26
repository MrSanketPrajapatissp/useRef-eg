import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function App() {
  return (
    <div>
      <Todo id={1} />
      <Todo id={18} />
      <Todo id={5} />
      <Todo id={8} />
      <Todo id={8} />
      <Todo id={22} />
    </div>
  );
}

function Todo({ id }) {
  const [getItem, settodos] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/todos/" + id).then((response) => {
      settodos(response.data);
    });
  }, [id]); // The effect will run whenever the 'id' changes

  useEffect(() => {
    axios.get("https://dummyjson.com/todos/" + id).then((response) => {
      settodos(response.data);
    });
  }, [id]);

  return (
    <div>
      <h1>{getItem.todo}</h1>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
