import React from "react";
import ReactDOM from "react-dom"

const heading = React.createElement("h1", { id: "heading" }, "helo react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// console.log(heading);

/*
 *  <div id="parent">
 *          <div id="child">
 *                <h1></h1>
 *          </div>
 *  </div>
 *
 */

const head = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // if u need to create multiple siblings we have to create a array
    
      React.createElement("h1", {}, "i am h1 hello tg")
    
  )
);

const root_ = ReactDOM.createRoot(document.getElementById("parent"));
root_.render(head);
