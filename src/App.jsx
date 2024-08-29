import { useState } from "react";
import PropTypes from "prop-types";
const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
);

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "get the books" },
    { id: 2, title: "go to lib" },
    { id: 3, title: "Go to gym" },
  ]);

  const Addtodo = () => {
    const newTodo = { id: todos.length + 1, title: "new todo title added" };
    settodos([...todos, newTodo]);
  };

  return (
    <div>
      <button onClick={Addtodo}>addTodo</button>
      <TodoList todos={todos}></TodoList>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default App;
