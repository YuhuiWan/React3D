import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById('app');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App />);

