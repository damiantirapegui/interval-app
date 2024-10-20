import { Analog } from "./clock-components/Analog-clock/Analog";
import { Digital } from "./clock-components/Digital-clock/Digital";
import { TextClock } from "./clock-components/Text-clock/TextClock";
import "./TimerTemplate.css";

export function TimerTemplate() {
  return (
    <>
      <p className="Heading">interval</p>
      <Analog />
      <Digital />
      <TextClock />
      <div className="button-container">
        <button type="button" className="abort-button">
          ABORT TIMER
        </button>
      </div>
    </>
  );
}
