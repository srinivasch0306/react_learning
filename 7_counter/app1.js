import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import offImg from "./off.jpeg"; // Import images

import onImg from "./on.jpeg"; // Import images

const swicth = "off";

const Light = () => {
  const [light, now] = useState(swicth);
  const [img, setImg] = useState("./off.jpeg");

  return (
    <div className="due">
      <img src={img} className="bulb" />
      <p className="light">{light}</p>

      {/* <img src={} */}
      <button
        className="btn"
        onClick={() => {
          if (light === "on") {
            now("off");
            setImg(offImg);
          } else {
            now("on");
            setImg(onImg);
          }
        }}
      >
        {" "}
        on
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Light />);
