// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// ✅ CSS (order matters)
import "./index.css";         // base/reset
import "./styles/global.css"; // landing page styles

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error('Root element "#root" not found. Check index.html.');
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
