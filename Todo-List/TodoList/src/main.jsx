import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot function connects the React app to the HTML element with id="root".
createRoot(document.getElementById('root')).render(
  // StrictMode element helps detect possible problems during development.
  <StrictMode>
    {/* App element renders the main todo application component. */}
    <App />
  </StrictMode>,
)
