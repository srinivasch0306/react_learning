// const heading=document.createElement("h1");
// heading.innerHTML="hello";

// const root=document.getElementById("root");
// root.appendChild(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// jsk heading

const jskheading = <h1 className="heading"> namaste javascript</h1>;

const Title = () => (
  // we can use return and sometimes
  <h1 className="head">namaste react functional companent </h1>
);

const Fn = () => <h1>hey whatsapp</h1>;

const element = <em>hello </em>;

const va_r = 10000;

const Learning = () => (
  <div id="container">
    <Title />
    {Title()}
    {element}
    {va_r}
    <Fn />
    <h2>{2 - 3}</h2>
    <h1 className="JSK">hello world jsk</h1>
  </div>
);

// const Learning = () => (
//   <div id="container">
//     <h1 className="JSK">Hello World JSK</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Learning />);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Learning />);


