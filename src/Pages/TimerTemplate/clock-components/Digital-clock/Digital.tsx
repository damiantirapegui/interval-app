import "./Digital.css";

import useTimer from "easytimer-react-hook";
import { useEffect, useState } from "react";

interface DigitalProps {
  minutes: number;
}

export function Digital({ minutes }: DigitalProps) {
  const [timer] = useTimer();
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    if (minutes > 0) {
      timer.start({ countdown: true, startValues: { seconds: minutes * 60 } });

      timer.addEventListener("secondsUpdated", () => {
        setTime({
          minutes: timer.getTimeValues().minutes,
          seconds: timer.getTimeValues().seconds,
        });
      });

      return () => {
        timer.stop;
      };
    }
  }, [minutes, timer]);

  return (
    <>
      <div className="digital-clock-container">
        <h1 className="digital-clock">
          {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
        </h1>
      </div>
    </>
  );
}
