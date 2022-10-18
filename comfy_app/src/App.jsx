import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import WeatherApi from './components/WeatherApp/WeatherApi';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <WeatherApi />
    </div>
  );
}

export default App;
