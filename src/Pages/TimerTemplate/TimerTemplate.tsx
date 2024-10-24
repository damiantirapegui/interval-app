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
  const isChecked = queryParams.get("isChecked");

  console.log(isChecked);

  const initialMinutes = parseInt(queryParams.get("minutes") || "0", 10);
  const initialSeconds = parseInt(queryParams.get("seconds") || "0", 10);

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [currentClock, setCurrentClock] = useState("analog");

  const [alarmIsActive, setAlarmIsActive] = useState(false); // Use state for when time is up
  const [timerIsActive, setTimerIsActive] = useState(false);

  // My timer for all clocks
  const [timer] = useTimer({
    startValues: {
      minutes: initialMinutes,
      seconds: initialSeconds,
    },
    countdown: true,
  });

  useEffect(() => {
    timer.start();

    setTimerIsActive(true);

    const updateTimerValues = setInterval(() => {
      const timeValues = timer.getTimeValues();
      setMinutes(timeValues.minutes);
      setSeconds(timeValues.seconds);

      const handleTargetAchieved = () => {
        if (isChecked) {
          // Återställ och starta timern om isChecked är true
          setAlarmIsActive(false);
          setTimeout(() => {
            // setTimeout för att vänta 1 sekund innan evenlyssnaren startar om tiden för att hinna se 00:00.
            timer.reset();
            timer.start({
              startValues: {
                minutes: initialMinutes,
                seconds: initialSeconds,
              },
            });
          }, 1000);
        } else {
          setAlarmIsActive(true); // När tiden är slut, aktivera alarm
          setTimerIsActive(false);
        }
      };
      timer.addEventListener("targetAchieved", handleTargetAchieved);
    });

    return () => {
      clearInterval(updateTimerValues);
    };
  }, [timer, isChecked, initialMinutes, initialSeconds]);

  if (!timerIsActive && alarmIsActive) {
    return <AlertView showAlarm={alarmIsActive} />;
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
