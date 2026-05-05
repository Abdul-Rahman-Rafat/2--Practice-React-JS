// import { useState } from "react";
import TodoList from "./TodoList";
import { TodoListContext } from "../contexts/TodoListContext";
import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ]);

  return (
    <>
      <TodoListContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodoListContext.Provider>
    </>
  );
}

export default App;
