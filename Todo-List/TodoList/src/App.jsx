// import { useState } from "react";
import TodoList from "./TodoList";
import { TodoListContext } from "../contexts/TodoListContext";
import { ToastContext } from "../contexts/ToastContext";
import { useState } from "react";

import "./App.css";
import MyToastSnackBar from "./MyToastSnackBar";

function App() {
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
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("toast message");

  function ShowHideToast(message) {
    // console.log("ShowHideToast called");
    setToastMessage(message);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }
  function onClose() {
    // console.log("Toast closed");
    setOpen(false);
  }

  return (
    <>
      <MyToastSnackBar message={toastMessage} open={open} onClose={onClose} />
      <ToastContext.Provider value={{ ShowHideToast }}>
        <TodoListContext.Provider value={{ todos, setTodos }}>
          <TodoList />
        </TodoListContext.Provider>
      </ToastContext.Provider>
    </>
  );
}

export default App;
