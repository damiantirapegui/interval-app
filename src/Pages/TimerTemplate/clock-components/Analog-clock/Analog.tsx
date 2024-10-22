import "./Analog.css";
import { useLocation } from "react-router-dom";
import useTimer from "easytimer-react-hook";
import { useEffect } from "react";
import { useState } from "react";

interface ClockHands {
  minutes: number;
  seconds: number;
}
export function Analog({ minutes }: { minutes: number }) {
  const [timer] = useTimer();
  const [clockHands, setClockHands] = useState<ClockHands>({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Starta timern med det angivna antalet minuter
    timer.start({ startValues: { seconds: minutes * 60 }, countdown: true });

    const updateClockHands = () => {
      const timeValues = timer.getTimeValues();

      console.log("Time values from timer", timeValues);
      console.log("Counters:", timeValues);

      const totalSeconds = timeValues.minutes * 60 + timeValues.seconds;
      const currentMinutes = Math.floor(totalSeconds / 60);
      const currentSeconds = totalSeconds % 60;

      const minuteHand = (currentMinutes % 60) * 6 + (currentSeconds / 60) * 6; // Varje minut = 6 grader + sekunder justering
      const secondHand = (currentSeconds % 60) * 6; // Varje sekund = 6 grader

      setClockHands({ minutes: minuteHand, seconds: secondHand });
    };

    timer.addEventListener("secondsUpdated", updateClockHands);

    return () => {
      timer.removeEventListener("secondsUpdated", updateClockHands);
    };
  }, [minutes, timer]);

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <div
            className="clock__second"
            style={{ transform: `rotate(${clockHands.seconds}deg)` }}
          ></div>
          <div
            className="clock__minute"
            style={{ transform: `rotate(${clockHands.minutes}deg)` }}
          ></div>
          <div className="clock__axis"></div>
          {Array.from({ length: 60 }).map((_, index) => (
            <section
              className="clock__indicator"
              key={index}
              style={{
                transform: `rotate(${index * 6}deg) translate(130px)`, // Justera translate-värdet
                position: "absolute",
                top: "50%", // Centrera indikatorerna vertikalt
                left: "50%", // Centrera indikatorerna horisontellt
                transformOrigin: "0 0", // Rotera kring cirkelns kant
              }}
            ></section>
          ))}
        </div>
      </div>
    </>
  );
}
