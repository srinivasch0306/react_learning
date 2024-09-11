import React from "react";
import './style.css'; // Import the CSS file

const Display = ({ info }) => {
  return (
    <div className="weather-report">
      {/* Ensure the property exists before rendering */}
      {info ? (
        <div>
          <h1>{info.timeslot}</h1>
          <h1 className="weather-description">{info.enhancedWeatherDescription}</h1>
          <p className="temperature">Temperature: {info.temperatureC-1}°C</p>
          <p className="temperature">Probability: {info.precipitationProbabilityInPercent}%</p>


          <p className="feels-like">Feels Like: {info.feelsLikeTemperatureC}°C</p>
          <p className="wind">Wind: {info.windDescription}</p>
          <p className="humidity">Humidity: {info.humidity}%</p>
        </div>
      ) : (
        <p className="no-description">No weather description available</p>
      )}
    </div>
  );
};

export default Display;
