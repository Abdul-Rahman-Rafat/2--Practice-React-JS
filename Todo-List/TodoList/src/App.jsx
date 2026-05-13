import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { TodoListContext } from "../contexts/TodoListContext";
// import { ToastContext } from "../contexts/ToastContext";
// import MyToastSnackBar from "./MyToastSnackBar";
import { ToastProvider } from "../contexts/ToastContext";
import TodoListProvider from "../contexts/TodoListContext";

// App function is the root component for the todo app.
function App() {
  // todos state stores the full list of todo objects.

  return (
    <>
      {/* ToastContext.Provider element shares the toast function with child components. */}
      <ToastProvider>
        {/* TodoListContext.Provider element shares todos state and updater with child components. */}
        <TodoListProvider>
          {/* TodoList element renders the main todo user interface. */}
          <TodoList />
        </TodoListProvider>
      </ToastProvider>
    </>
  );
}
export default App;
