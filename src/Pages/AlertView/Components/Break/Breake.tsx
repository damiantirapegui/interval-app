import "./Breake.css";
interface breakProps {
  passTime: {
    seconds: number;
    minutes: number;
  };
}

export const Breake: React.FC<breakProps> = ({ passTime }) => {
  return (
    <>
      <div className="brake-container">
        <div className="pause-dots-container">
          <div className="pause-dot"></div>
          <div className="pause-dot"></div>
        </div>
        <div className="pause-alert-container">
          <h2 className="pause-alert">Pause & breathe</h2>
          <p className="timer">
            {passTime.minutes.toString().padStart(2, "0")}:
            {passTime.seconds.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </>
  );
};
