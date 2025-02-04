import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      setTime({
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
      });
    };

    updateClock();

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time">
      <div className="hour">{time.hours }<h5>H</h5></div>
      <div className="minute">{time.minutes}<h5>M</h5></div>
      <div className="second">{time.seconds}<h5>S</h5></div>
    </div>
  );
}

export default Clock;
