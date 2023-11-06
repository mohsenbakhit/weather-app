import React from "react";
import "./styles.css";
import { Card } from "semantic-ui-react";

const Weather = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <h5>Temperature: {(weatherData.main.temp - 273.15) | 0} &deg;C</h5>
      <h5>{weatherData.weather[0].description}</h5>
      <p>Feels Like: {(weatherData.main.feels_like - 273.15) | 0} &deg;C</p>
      <p>Humidity: {weatherData.main.humidity} </p>
    </Card.Content>
  </Card>
);

export default Weather;
