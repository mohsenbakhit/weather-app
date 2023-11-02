import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import "./App.css";
import logo from "./logo.svg";

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
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
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
      {typeof data != "undefined" && typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
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
