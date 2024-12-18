import { useState, useEffect } from "react";

import { Analog } from "./clock-components/Analog-clock/Analog";
import { Digital } from "./clock-components/Digital-clock/Digital";
import { TextClock } from "./clock-components/Text-clock/TextClock";
import { useLocation } from "react-router-dom";
import useTimer from "easytimer-react-hook";
import { useNavigate } from "react-router-dom";
import "./TimerTemplate.css";
import { AlertView } from "../AlertView/AlertView";

// In this template is where all the magic happens.
// In here we have our timer and all the logic to make it work
// All the clock compontents you can find in the clock-compontents folder.
export const TimerTemplate = () => {
  //I chose query params for this small project to easily manipulate the time when i needed to test it and also to check i boolean state for certain functions and logic.
  const location: any = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isChecked = queryParams.get("isChecked");
  const breakCheck = queryParams.get("breakeIsChecked");

  const navigate = useNavigate(); // Use navigate to render setTimer page if time is up and no intervals were chosen in setTimer from the begining

  const initialMinutes = parseInt(queryParams.get("minutes") || "0", 10);
  const initialSeconds = parseInt(queryParams.get("seconds") || "0", 10);

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [currentClock, setCurrentClock] = useState("analog");

  const [alarmIsActive, setAlarmIsActive] = useState(false); // Use state for when time is up
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [breakeView, setBreakView] = useState(false);

  const handleAlertButton = () => {
    //Here we rule when we press no puse go now button when puase view is active
    // Or when alarm is active and we want to set new time
    if (alarmIsActive) {
      setAlarmIsActive(false);
      timer.reset();
      timer.stop();
      setTimerIsActive(false);
      navigate("/setTimer/");
    } else if (breakeView) {
      pauseTimer.stop();
      pauseTimer.reset();
      setBreakView(false);
      timer.reset();
      timer.start();
    } else {
      timer.stop();
      timer.reset();
      navigate("/setTimer/");
    }
  };

  // My timer for all clocks
  const [timer] = useTimer({
    startValues: {
      minutes: initialMinutes,
      seconds: initialSeconds,
    },
    countdown: true,
  });

  // My timer for the pause event
  const [pauseTimer] = useTimer({
    startValues: {
      minutes: 5,
      seconds: 0,
    },
    countdown: true,
  });

  useEffect(() => {
    timer.start();
    console.log(pauseTimer.getTimeValues());

    setTimerIsActive(true); //state 4

    const updateTimerValues = setInterval(() => {
      const timeValues = timer.getTimeValues();

      setMinutes(timeValues.minutes);
      setSeconds(timeValues.seconds);

      const handleTargetAchieved = () => {
        if (isChecked === "true") {
          setTimeout(() => {
            timer.start({
              startValues: {
                minutes: initialMinutes,
                seconds: initialSeconds,
              },
            }),
              timer.reset;

            console.log("Nu körs intervallet");
          }, 1000);
        } else if (breakCheck === "true") {
          setTimerIsActive(false);
          timer.pause();
          setBreakView(true);
          pauseTimer.start();
          pauseTimer.stop();
          pauseTimer.reset();

          const handlePauseEnd = () => {
            timer.reset();
            setBreakView(false);
            setTimerIsActive(true);
            setAlarmIsActive(false);
            timer.start({
              startValues: {
                minutes: initialMinutes,
                seconds: initialSeconds,
              },
            });

            pauseTimer.removeEventListener("targetAchieved", handlePauseEnd);
          };

          pauseTimer.addEventListener("targetAchieved", handlePauseEnd);
        } else {
          setAlarmIsActive(true); // När tiden är slut, aktivera alarm
          setTimerIsActive(false);
        }
      };
      timer.addEventListener("targetAchieved", handleTargetAchieved);

      pauseTimer.addEventListener("targetAchieved", handleTargetAchieved);
    });

    return () => {
      clearInterval(updateTimerValues);
    };
  }, [timer, isChecked, initialMinutes, initialSeconds, pauseTimer]);

  if ((!timerIsActive && alarmIsActive) || (!timerIsActive && breakeView)) {
    return (
      <AlertView
        showAlarm={alarmIsActive}
        showBreak={breakeView}
        passTimer={pauseTimer.getTimeValues()}
        handleButton={handleAlertButton}
      />
    );
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
        <button
          type="button"
          className="abort-button"
          onClick={handleAlertButton}
        >
          ABORT TIMER
        </button>
      </div>
    </>
  );
};
