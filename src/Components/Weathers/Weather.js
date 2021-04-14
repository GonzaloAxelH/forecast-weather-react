import React from "react";
import "../../Styles/Weather/Weather.css"
import SunnyIcon from "@material-ui/icons/WbSunnyOutlined";
import CloudIconAfter from '@material-ui/icons/Cloud';
function Weather({hour,tempMax,tempMin,state}) {
 function convertCelsius(k) {
    return Math.round(k - 273.15);
  }
function  getHour(h){
  const hora = h.split(' ')
  const hora2 = hora[1].split(':')
  const hora3 = hora2[0].concat(':00')
  return hora3
}
function getDate(h){
  const date = h.split(' ')
  const date2  = date[0].split('-')
  const mes = date2[1]
  const day = date2[2]
  const date3 = mes.concat('/'+day)
  return date3
}
function getPeriodo(h){
    const h2 =h.split(':')  
    const int = parseInt(h2[0])
    return  int >= 12 ? 'pm' : 'am' 
}
  return (
    <> 
      { getHour(hour) === '00:00'  ? <div>{getDate(hour)}</div> : ""}
    <div className="weather">
      <p className="weather__dia">{getHour(hour)} <span>{getPeriodo(getHour(hour))}</span> | <span>{getDate(hour)}</span> </p>
      <div className="weather__icon">
        <CloudIconAfter className="weather__cloud"/>
        <SunnyIcon className="weather__sunny" />
      </div>
      <div className="weather__grados">
        <span>{convertCelsius(tempMax)}°</span>
        <span>{convertCelsius(tempMin)}°</span>
      </div>
      <p className="weather__viento"> Viento : { 12 } km/h </p>
      <p className="weather__state">{state}</p>
    </div>
    </>
  );
}

export default Weather;
