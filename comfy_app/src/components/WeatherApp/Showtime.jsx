import React, { useState } from 'react';

export default function Showtime() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, changeTime] = useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  return (
    <div>
      <p>{currentTime}</p>
    </div>
  );
}
