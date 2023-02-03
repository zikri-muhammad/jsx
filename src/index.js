

// 1) import react and reactDom 
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App"

// 2) Get a reference to the div with ID root
const el = document.getElementById('root')

// tell react to take control of that element 
const root = ReactDom.createRoot(el);

// 4) Create a component

// show the component on the screen
root.render(<App />)