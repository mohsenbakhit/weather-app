import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import "./App.css";
import logo from "./logo.svg";
import { Card, CardContent } from "semantic-ui-react";

export default function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };

    fetchData();
  }, [lat, lon]);

  return (
    <div className="App">
      {typeof data != "undefined" && typeof data.city != "undefined" ? (
        <span>
          <Card.Header className="header">City: {data.city.name}</Card.Header>
          <Weather weatherData={data.list[0]} />
          <Weather weatherData={data.list[7]} />
          <Weather weatherData={data.list[14]} />
          <Weather weatherData={data.list[21]} />
          <Weather weatherData={data.list[28]} />
          <p>
            Sunrise:{" "}
            {new Date(data.city.sunrise * 1000).toLocaleTimeString("en-CA")}
          </p>
          <p>
            Sunset:{" "}
            {new Date(data.city.sunset * 1000).toLocaleTimeString("en-CA")}
          </p>
        </span>
      ) : (
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" />
            <p>Loading...</p>
          </header>
        </div>
      )}
    </div>
  );
}
