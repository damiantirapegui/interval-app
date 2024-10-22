import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Analog } from "./clock-components/Analog-clock/Analog";
import { Digital } from "./clock-components/Digital-clock/Digital";
import { TextClock } from "./clock-components/Text-clock/TextClock";
import "./TimerTemplate.css";

export function TimerTemplate() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const minutesParam = searchParams.get("minutes");
  const showMinuts = minutesParam ? parseInt(minutesParam) : 0;
  const [currentClock, setCurrentClock] = useState("analog");

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
        {currentClock === "analog" && <Analog minutes={showMinuts} />}
        {currentClock === "digital" && <Digital minutes={showMinuts} />}
        {currentClock === "text" && <TextClock />}
      </div>
      <div className="button-container">
        <button type="button" className="abort-button">
          ABORT TIMER
        </button>
      </div>
    </>
  );
}
