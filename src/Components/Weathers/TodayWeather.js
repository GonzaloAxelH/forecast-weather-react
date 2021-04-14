import React, {useEffect,useState} from "react";
import "../../Styles/Weather/TodayWeather.css";
function TodayWeather({ temp ,country, city ,oters}) {
  function convertCelsius(k) {
    return Math.round(k - 273.15);
  }
  return (
    <div className="todayWeather">
      <p className="todayWeather__title">
        {city} ,<span>{country}</span>
      </p>
      <div className="todayWeather__box">
        <div className="todayWeather__grados">
          <span>
            {convertCelsius(temp)} <span>°</span>
          </span>
          <span>
            C <div style={{cursor:'pointer'}}>F</div>
          </span>
        </div>
        <p className="todayWeather__state">{oters.estado}</p>
      </div>
      <div className="todayWeather__info">
        <p>
          Temp max<span>{convertCelsius(oters.temp_max)}°</span>
        </p>
        <p>
          Viento <span> {oters.viento} km/h </span>
        </p>
        <p>
          Temp min <span>{convertCelsius(oters.temp_min)}°</span>
        </p>
        <p>
          Humedad <span> {oters.humedad} %</span>
        </p>
        <p>
          Direccion del viento <span>{oters.direction} deg</span>
        </p>
      </div>
    </div>
  );
}

export default TodayWeather;
