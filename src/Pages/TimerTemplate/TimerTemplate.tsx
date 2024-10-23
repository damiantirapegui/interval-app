import { useState, useEffect } from "react";

import { Analog } from "./clock-components/Analog-clock/Analog";
import { Digital } from "./clock-components/Digital-clock/Digital";
import { TextClock } from "./clock-components/Text-clock/TextClock";
import { useLocation } from "react-router-dom";
import useTimer from "easytimer-react-hook";

import "./TimerTemplate.css";
import { AlertView } from "../AlertView/AlertView";

export const TimerTemplate = () => {
  const location: any = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Konvertera minuter och sekunder till nummer
  const initialMinutes = parseInt(queryParams.get("minutes") || "0", 10);
  const initialSeconds = parseInt(queryParams.get("seconds") || "0", 10);

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [currentClock, setCurrentClock] = useState("analog");
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [timer] = useTimer({
    startValues: {
      minutes: initialMinutes,
      seconds: initialSeconds,
    },
    countdown: true,
  });

  useEffect(() => {
    timer.start();

    const updateTimerValues = setInterval(() => {
      const timeValues = timer.getTimeValues();
      setMinutes(timeValues.minutes);
      setSeconds(timeValues.seconds);

      if (timeValues.minutes === 0 && timeValues.seconds === 0) {
        setIsTimeUp(true);
        clearInterval(updateTimerValues);
      }
    }, 1000);

    return () => clearInterval(updateTimerValues);
  }, [timer]);

  if (isTimeUp) {
    return <AlertView />;
  }

  const handleClockTap = () => {
    if (currentClock === "analog") {
      setCurrentClock("digital");
    } else if (currentClock === "digital") {
      setCurrentClock("text");
    } else {
      setCurrentClock("analog");
    }
  };

  return (
    <>
      <p className="Heading">interval</p>
      <div onClick={handleClockTap}>
        {currentClock === "analog" && (
          <Analog minute={minutes} seconds={seconds} />
        )}
        {currentClock === "digital" && (
          <Digital minute={minutes} seconds={seconds} />
        )}
        {currentClock === "text" && (
          <TextClock minute={minutes} seconds={seconds} />
        )}
      </div>
      <div className="button-container">
        <button type="button" className="abort-button">
          ABORT TIMER
        </button>
      </div>
    </>
  );
};
