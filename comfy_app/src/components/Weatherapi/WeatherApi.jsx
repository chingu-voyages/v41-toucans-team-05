import '../../App.css';
import '../Weatherapi/layout.scss'
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import Showtime from '../liveTime/Showtime';
import useGeoLocation from '../../hooks/useGeolocation';

// import cloudy from '../../../public/images/clouds.png';
// import clear from '../../../public/images/sun.png';
// import rainy from '../../../public/images/rain.png';
// import snowy from '../../../public/images/snow.png';


function WeatherApi() {
  const locations = useGeoLocation();
  const lat = JSON.stringify(locations.coordinates.lat);
  const lon = JSON.stringify(locations.coordinates.lon);
  const [name, setName] = useState([]);
  const [sky, setSky] = useState([]);
  // const [icon, setIcon] = useState([]);
  const [temp, setTemp] = useState([]);
  const today = new Date();

  const bg = '';
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid=0f86c0f97f4a62686b4859344ba72ac1`
      )
      .then((res) => {
        setName(res.data.name);
        setSky(res.data.weather[0].main);
        // setIcon(res.data.weather[0].icon);
        setTemp(res.data.main.temp);
        console.log(res.data);

        function backGround() {
          if (res.data.weather[0].id < 250) {
            return `(bg = "url('../images/thunder.jpg')")`;
          }
          if (res.data.weather[0].id < 350) {
            return `(bg = "url('../images/drizzle.jpg')")`;
          }
          if (res.data.weather[0].id < 550) {
            return `(bg = "url('../images/rain.jpg')")`;
          }
          if (res.data.weather[0].id < 650) {
            return `(bg = "url('../images/snow.jpg')")`;
          }
          if (res.data.weather[0].id < 790) {
            return `(bg = "url('../images/atmosphere.jpg')")`;
          }
          if (res.data.weather[0].id === 800) {
            return `(bg = "url('../images/clear.jpg')")`;
          }
          return `bg = "url('../images/clouds.jpg')"`;
        }
        backGround();
        document.getElementById('1').style.backgroundImage = bg;
      });
  });



  return (
    <div className='App'>
      <div className='container' id='1'>
        <div className='top'>
          <div className='location'>
            <p>
              <span className='material-icons'></span>
              {name}
            </p>
          </div>
          <div className='date'>
            <Moment format='MMM DD, ddd'>{today}</Moment>
            <Showtime />
          </div>
          <div className='sky'>
            <p>{sky}</p>
          </div>
          <div className='icon' id='2'>
            {/* <img src='' alt='' /> */}
          </div>
          <div className='temp'>
            <h1>{Math.round(1.8 * (temp - 273) + 32)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// function isactive() {

// }

export default WeatherApi;
