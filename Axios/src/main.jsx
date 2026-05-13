import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// createRoot function connects the React app to the HTML element with id="root".
createRoot(document.getElementById("root")).render(
  // BrowserRouter element enables routing with normal browser URLs.
  <BrowserRouter>
    {/* StrictMode element helps detect possible problems during development. */}
    <StrictMode>
      {/* App element renders the main application component. */}
      <App />
    </StrictMode>
  </BrowserRouter>,
);
