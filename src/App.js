import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import "./App.css";

const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
const REACT_APP_API_KEY = `77c0c942672faef8e7301e6166371159`;
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
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${REACT_APP_API_KEY}`
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
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
