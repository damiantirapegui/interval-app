import { Analog } from "./clock-components/Analog-clock/Analog";
import "./TimerTemplate.css";

export function TimerTemplate() {
  return (
    <>
      <p className="Heading">interval</p>
      <Analog />
      <div className="button-container">
        <button type="button" className="abort-button">
          ABORT TIMER
        </button>
      </div>
    </>
  );
}
