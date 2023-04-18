import React from "react";
import ReactDOM from "react-dom/client";

// Main container
import App from './App'
// Index style
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)