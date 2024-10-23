import "./Digital.css";

interface DigitalProps {
  minute: number;
  seconds: number;
}

export const Digital = ({ minute, seconds }: DigitalProps) => {
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div className="digital-clock-container">
      <h1 className="digital-clock">
        {formatTime(minute)}:{formatTime(seconds)}
      </h1>
    </div>
  );
};
