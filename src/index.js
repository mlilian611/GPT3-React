import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));
const root = document.getElementById("root");

const appRoot = ReactDOM.createRoot(root); // Create a root

appRoot.render(<App />);
