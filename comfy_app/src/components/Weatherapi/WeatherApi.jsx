
import './layout.scss'
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import axios from 'axios';
import Showtime from '../liveTime/Showtime';
import useGeoLocation from '../../hooks/useGeolocation';

const capitalize = (word) => {
  return word.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}


const WeatherApi = () => {
  const locations = useGeoLocation();
  const lat = JSON.stringify(locations.coordinates.lat);
  const lon = JSON.stringify(locations.coordinates.lon);
  const [name, setName] = useState('');
  const [sky, setSky] = useState('');
  // const [icon, setIcon] = useState([]);
  const [temp, setTemp] = useState('');
  const today = new Date();

  const bg = '';
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&appid=0f86c0f97f4a62686b4859344ba72ac1`
      )
      .then((res) => {
        setName(res.data.name);
        setSky(res.data.weather[0].description);
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
      <div className='weather' id='1'>
        <div id="cloud-intro">
          <div className='top'>
            <div className='location'>
              <p>
                <svg className="svgname" width="32px" height="40px" viewBox="-5 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path id="Path_19" data-name="Path 19" d="M1002,44a10,10,0,0,0-10,10c0,5.523,10,20,10,20s10-14.477,10-20A10,10,0,0,0,1002,44Zm0,13a3,3,0,1,1,3-3A3,3,0,0,1,1002,57Z" transform="translate(-991 -43)" fill="#cbff94" stroke="#333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>
                <span className='material-icons'>
                  {name.charAt(0).toUpperCase()}{name.slice(1)}</span>
              </p>
            </div>
            <div className='sky'>
              <p>
                {/* {sky.charAt(0).toUpperCase() + sky.slice(1)} */}
                {capitalize(sky)}
              </p>
            </div>
            <div className='icon' id='2'>
              {/* <img src='' alt='' /> */}
            </div>
            <div className='temp'>
              <h1>{Math.round(1.8 * (temp - 273) + 32)}°F</h1>
            </div>
            <div className='date'>
              <Moment format='MMM DD, ddd'>{today}</Moment>
              <Showtime />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default WeatherApi;
