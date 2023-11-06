import React from "react";
import "./styles.css";
import { Card } from "semantic-ui-react";

const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const setDate = (weatherData) => {
  return new Date(weatherData.dt * 1000);
};
const Weather = ({ weatherData }) => (
  <Card className="weather-card header">
    <div className="flex">
      <p className="day">Day: {weekDay[setDate(weatherData).getDay() - 1]}</p>
      <p className="day">{setDate(weatherData).toLocaleDateString("en-US")}</p>
    </div>
    <Card.Content>
      <h5 className="temp">
        Temperature: {(weatherData.main.temp - 273.15) | 0} &deg;C
      </h5>
      <h5 className="description">{weatherData.weather[0].description}</h5>
      <p>Feels Like: {(weatherData.main.feels_like - 273.15) | 0} &deg;C</p>
      <p>Humidity: {weatherData.main.humidity} </p>
    </Card.Content>
  </Card>
);

export default Weather;
