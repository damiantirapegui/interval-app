import "./Analog.css";

interface AnalogProps {
  minute: number;
  seconds: number;
}

export const Analog: React.FC<AnalogProps> = ({ minute, seconds }) => {
  const secondDegree = seconds * 6;
  const minuteDegree = minute * 6 + seconds / 60;
  return (
    <div className="clock-container">
      <div className="clock">
        <div
          className="clock__second"
          style={{ transform: `rotate(${secondDegree}deg)` }}
        ></div>
        <div
          className="clock__minute"
          style={{ transform: `rotate(${minuteDegree}deg)` }}
        ></div>
        <div className="clock__axis"></div>
        {Array.from({ length: 60 }).map((_, index) => (
          <section
            className="clock__indicator"
            key={index}
            style={{
              transform: `rotate(${index * 6}deg) translate(130px)`,
              position: "absolute",
              top: "50%",
              left: "50%",
              transformOrigin: "0 0",
            }}
          ></section>
        ))}
      </div>
    </div>
  );
};
