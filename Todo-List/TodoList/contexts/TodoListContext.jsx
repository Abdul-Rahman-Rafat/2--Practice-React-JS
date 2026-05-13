import { createContext, useReducer } from "react";
import TodosReducer from "../Reducers/TodosReducer";

// TodoListContext variable creates shared storage for todos and the setTodos function.
export const TodoListContext = createContext([]);

// TodoListProvider function wraps the app components and provides the shared todo list state and updater function to them.
export default function TodoListProvider({ children }) {
  // state and dispatch variables come from useReducer to manage the todo list state with the TodosReducer function.
  const [todos, dispatch] = useReducer(TodosReducer, []);

  return (
    // TodoListContext.Provider component wraps the children components and provides the shared todos and setTodos function to them.
    <TodoListContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
}
