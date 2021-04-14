import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Weather from "./Components/Weathers/Weather";
import TodayWeather from "./Components/Weathers/TodayWeather";
import Loader from "./Animations/Loader";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import axios from "axios";
import "./App.css";
const APIKey = "cfa1d56aca62d1999a7709863be41398";
function App() {
  const [cityName, setCityName] = useState("Ilo");
  const [country, setCountry] = useState("PE");
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState(null);
  const [pronosticData, setPronosticData] = useState(null);
  const [oters, setOters] = useState({});

  useEffect(() => {
    async function fetchData() {
      const Datos = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`
      );
      setWeather(Datos.data);
      setOters({
        temp_max: Datos.data.main.temp_max,
        temp_min: Datos.data.main.temp_min,
        humedad: Datos.data.main.humidity,
        presion: Datos.data.main.pressure,
        estado: Datos.data.weather[0].description,
        viento: Datos.data.wind.speed,
        direction: Datos.data.wind.deg,
      });
      setTemperature(Datos.data.main.temp);
      setCountry(Datos.data.sys.country);
      return Datos;
    }
    fetchData();
  }, [cityName]);

  useEffect(() => {
    async function fetchDataPronostic() {
      const DatosPronostic = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}`
      );
      setPronosticData(DatosPronostic.data.list);
      console.log(DatosPronostic.data.list);
      return DatosPronostic;
    }
    fetchDataPronostic();
  }, [cityName]);
  const saveCityNameEnter = (e) => {
    const name = e.target.value;
    if (e.key === "Enter") {
      setPronosticData(null);
      setCityName(name);
      e.target.value = "";
    }
  };
  const saveCityNameClick = () => {
    const name = document.getElementById("input_city").value;
    console.log(name);
    setPronosticData(null);
    setCityName(name);
    document.getElementById("input_city").value = "";
  };

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button = document.getElementById("but");
      button.onclick = function () {
        document.getElementById("fila").scrollLeft += 500;
        console.log(document.getElementById("fila").scrollLeft);
      };
    },
    false
  );
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      var button2 = document.getElementById("but2");
      button2.onclick = function () {
        document.getElementById("fila").scrollLeft -= 500;
      };
    },
    false
  );

  //DOM
  return (
    <div className="App">
      <Sidebar />
      <div className="app__main">
        <Header onClick={saveCityNameClick} onKeyPress={saveCityNameEnter} />
        <div className="app__container">
          <div className="app__today">
            <TodayWeather
              city={weather.name}
              country={country}
              temp={temperature}
              oters={oters}
            />
          </div>

          <span className="app__button-left" id="but">
            <DoubleArrowIcon style={{ fontSize: "30px" }} />
          </span>

          <div className="app__cards">
            <div className="app__card-list" id="fila">
              {pronosticData !== null ? (
                pronosticData.slice(6, 39).map((item) => {
                  return (
                    <Weather
                      key={item.dt}
                      tempMax={item.main.temp_max}
                      tempMin={item.main.temp_min}
                      state={item.weather[0].description}
                      hour={item.dt_txt}
                    />
                  );
                })
              ) : (
                <div className="app__loader">
                  <Loader />
                </div>
              )}
            </div>
          </div>
          <span className="app__button-right" id="but2">
            <DoubleArrowIcon style={{ fontSize: "30px" }} />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
