import { useState } from "react";
import TodoComponent from "./TodoComponent";
import "./TodoList.css";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "learn react", completed: false },
    {
      id: 2,
      text: "learn tailwindsadassssssssssssssssssssssssssssssssssssssssssssssss tailwindsadasssssssssssssssssssssssssssssssssssssssssssssssstailwindsadasssssssssssssssssssssssssssssssssssssssssssssssstailwindsadassssssssssssssssssssssssssssssssssssssssssssssss",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="todo-list">
        <h1>my todo list</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#todo-list">All Todos </a>
            </li>
            <li>
              <a href="#completed-todos">Completed Todos</a>
            </li>
            <li>
              <a href="#uncompleted-todos">Uncompleted Todos</a>
            </li>
          </ul>
        </nav>
        {todos.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="add-todo-form">
        <input type="text" placeholder="Add a new todo..." />
        <button className="add-btn">Add Todo</button>
      </div>
    </>
  );
}
