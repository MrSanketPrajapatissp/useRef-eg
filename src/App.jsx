import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function App() {
  const [selectedId, setid] = useState(1);

  return (
    <div>
      <button
        onClick={function () {
          setid(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setid(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setid(3);
        }}
      >
        3
      </button>
      <button
        onClick={function () {
          setid(4);
        }}
      >
        4
      </button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [getItem, setItem] = useState({});

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://dummyjson.com/todos/` + id).then((response) => {
        setItem(response.data);
      });
    }, 3000);
  }, [id]);

  return (
    <div>
      Id: {id}
      <h3>{getItem.todo}</h3>
      {/* <h3>{Item.id}</h3>
      <h3>{Item.completed}</h3> */}
    </div>
  );
}
export default App;

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};
