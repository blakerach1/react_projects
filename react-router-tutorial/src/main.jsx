import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This file can be considered the domain file of our React application.
// It is the entry point for the application and is responsible for
// rendering the root component of the application into the DOM.
// This is the library or part of the React library that talks to the HTML
// we're telling it to create a new element at document.getElementById('root')
// and then render the App component into that element, so that there is a link between React and HTML

// The ReactDOM.createRoot method is used to create a new root for a React tree.
// rendering an app component into the root element
