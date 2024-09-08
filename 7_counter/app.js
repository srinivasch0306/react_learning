import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

let n = 10;

const Counter = () => {
  const [new_, setn] = useState(n);
  return (
    <div className="counter">
      <h1 className="count">counter app</h1>
      <h1 className="value">{new_}</h1>
      {/* <input type="int"></input> */}
      <button
        className="increment"
        onClick={() => {
          setn(new_ + 1);
        }}
      >
        increment
      </button>
      <button className="increment" onClick={()=>{
        setn(new_-1)
      }}>Decrement</button>
      <button className="increment" onClick={()=>{
        setn(0)
      }}>set to zero</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
