import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Display from "./Display";

const Weatherapp = () => {
  const [current, setCurrent] = useState([]);

  const Fetch = async () => {
    try {
      const response = await fetch(
        "https://weather-broker-cdn.api.bbci.co.uk/en/forecast/aggregated/1277333"
      );

      const json = await response.json();

      console.log(json.forecasts[3].detailed.reports);
      // Update state with the fetched data
      setCurrent(json.forecasts[3].detailed.reports);
    } catch (error) {
      console.error("Error fetching the weather data: ", error);
    }
  };

  useEffect(() => {
    console.log("useEffect running");
    Fetch();
  }, []); // Runs once after the first render.

  return (
    <div>
      <div className="container">
        {current.map((value, index) => (
          <Display key={index} info={value} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Weatherapp />);
