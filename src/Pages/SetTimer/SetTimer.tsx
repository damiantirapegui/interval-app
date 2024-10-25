import "./SetTimer.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import useTimer from "easytimer-react-hook";

interface TimerHookConfig {
  startMinutes?: number;
  countdown?: boolean;
}

export const SetTimer = ({ startMinutes, countdown }: TimerHookConfig) => {
  const [showMinuts, setShowMinuts] = useState(startMinutes ?? 0); //
  const [isBouncing, setIsBouncing] = useState(false);
  const [showSeconds, setShowSeconds] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [breakIsChecked, setBreakIsChecked] = useState(false);

  const [timer] = useTimer({
    startValues: {
      minutes: startMinutes ?? 0,
      seconds: 0,
    },
    countdown: countdown,
  });

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleBreakCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreakIsChecked(event.target.checked);
  };

  // Start timer with min and seconds
  const startTime = () => {
    setShowMinuts(startMinutes ?? 0);

    timer.start();
    const timeValues = timer.getTimeValues();
    setShowSeconds(timeValues.seconds);

    if (isChecked) {
      timer.reset();
      timer.start({
        startValues: { minutes: startMinutes ?? 0, seconds: 0 },
      });
    } else {
      timer.start();
    }
  };

  const toggleCountUp = () => {
    setShowMinuts(showMinuts + 1);
    if (showMinuts === 60) {
      setShowMinuts(60);
    }
    setIsBouncing(true);
    triggerBounce();
  };

  const toggleCountDown = () => {
    setShowMinuts(showMinuts - 1);

    if (showMinuts === 0) {
      setShowMinuts(0);
    }
    setIsBouncing(true);

    triggerBounce();
  };

  const triggerBounce = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false); // Återställ tillstånd efter animation
    }, 100); // Samma tid som animationens varaktighet
  };

  return (
    <>
      <div className="setTimer-body">
        <div className="set-time">
          <motion.div
            className=" arrow arrow--left decrease"
            onClick={toggleCountDown}
          ></motion.div>
          <div className="minutes-container">
            <motion.p
              className="minutes"
              animate={isBouncing ? { scale: [1, 1.5, 1] } : { fontSize: 80 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              {showMinuts}
            </motion.p>
          </div>
          <div
            className=" arrow arrow--right increase"
            onClick={toggleCountUp}
          ></div>
        </div>

        <form action="" className="form">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="intervals"
              checked={isChecked}
              onChange={handleCheckBox}
            />
            <label htmlFor="intervals">intervals</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="break"
              // breakeCheck={breakIsChecked}
              onChange={handleBreakCheckBox}
            />
            <label htmlFor="break">5 min break / interval</label>
          </div>
          <div className="form-button-container">
            <Link
              to={
                {
                  pathname: `/timer-template`,
                  search: `?minutes=${showMinuts}&seconds=${showSeconds}&isChecked=${isChecked}&breakeIsChecked=${breakIsChecked}`,
                  state: { isChecked },
                } as any
              }
            >
              <button id="form-button" onClick={startTime}>
                START TIMER
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
