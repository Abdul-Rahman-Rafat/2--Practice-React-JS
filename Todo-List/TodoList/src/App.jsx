import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { TodoListContext } from "../contexts/TodoListContext";
// import { ToastContext } from "../contexts/ToastContext";
// import MyToastSnackBar from "./MyToastSnackBar";
import { ToastProvider } from "../contexts/ToastContext";
// App function is the root component for the todo app.
function App() {
  // todos state stores the full list of todo objects.
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      details: "Learn the basics of React",
      completed: false,
    },
    {
      id: 2,
      text: "Build a Todo App",
      details: "Create a simple todo app with React",
      completed: true,
    },
  ]);

  return (
    <>
      {/* ToastContext.Provider element shares the toast function with child components. */}
      <ToastProvider>
        {/* TodoListContext.Provider element shares todos state and updater with child components. */}
        <TodoListContext.Provider value={{ todos, setTodos }}>
          {/* TodoList element renders the main todo user interface. */}
          <TodoList />
        </TodoListContext.Provider>
      </ToastProvider>
    </>
  );
}
export default App;
