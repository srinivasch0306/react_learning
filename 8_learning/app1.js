import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <div>
        <h1>hello {inputValue}</h1>
        <button
          onChange={(e) => setInputValue(e.target.value)}
        >
          submit
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Form />);
