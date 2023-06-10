import { createContext, useEffect, useState } from "react";
import { LeftPane, MiddlePane, RightPane } from "./components";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "4631ef4177fb13d78b2dc0b0c1650420";

export const weatherContext = createContext({
  weatherData: {},
  setweatherData: (obj) => obj,
  getCityData: (obj) => obj,
  setCityName: (obj) => obj,
  locateMe: (obj) => obj,
});

function App() {
  const [latitude, setlatitude] = useState(51.509865);
  const [longitude, setlongitude] = useState(-0.118092);
  const [weatherData, setweatherData] = useState({});
  const [cityName, setCityName] = useState("Mumbai");

  const getWeatherData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setweatherData(data);
  };

  const locateMe = () => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setlatitude(position.coords.latitude);
        setlongitude(position.coords.longitude);
      },
      function (error) {
        console.log("Error getting location: " + error.message);
      }
    );
    console.log("Located");
    getWeatherData(
      API_BASE_URL +
        `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
  };

  navigator.geolocation.getCurrentPosition(
    function (position) {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    },
    function (error) {
      // Handle any errors that occur during the location retrieval
      console.log("Error getting location: " + error.message);
    }
  );

  useEffect(() => {
    getWeatherData(
      API_BASE_URL +
        `lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
  }, [latitude, longitude]);

  const getCityData = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch(
        API_BASE_URL + `q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setweatherData(data);
    }
  };

  return (
    <div className="App">
      <LeftPane />
      <weatherContext.Provider
        value={{
          weatherData: weatherData,
          setweatherData: setweatherData,
          setCityName: setCityName,
          getCityData: getCityData,
          locateMe: locateMe,
        }}
      >
        <MiddlePane />
        <RightPane />
      </weatherContext.Provider>
    </div>
  );
}

export default App;
