import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import WeatherApi from './components/Weatherapi/WeatherApi';
// import Footer from './components/Footer/Footer';
import FooterTest from './components/Footer/FooterTest';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <WeatherApi />
      <FooterTest />
    </div>
  );
}

export default App;
