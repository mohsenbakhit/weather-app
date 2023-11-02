import React from "react";
import "./styles.css";
import { Card } from "semantic-ui-react";

const Weather = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">City: {weatherData.name}</Card.Header>
      <h5>Temperature: {weatherData.main.temp} &deg;C</h5>
      <h5>{weatherData.weather[0].description}</h5>
      <p>Feels Like: {weatherData.main.feels_like} &deg;C</p>
      <p>Humidity {weatherData.main.humidity} </p>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-CA")}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-CA")}
      </p>
    </Card.Content>
  </Card>
);

export default Weather;
