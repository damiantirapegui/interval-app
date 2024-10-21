import "./Breake.css";

export function Breake() {
  return (
    <>
      <div className="brake-container">
        <div className="pause-dots-container">
          <div className="pause-dot"></div>
          <div className="pause-dot"></div>
        </div>
        <div className="pause-alert-container">
          <h2 className="pause-alert">Pause & breathe</h2>
          <p className="timer">3.37</p>
        </div>
      </div>
    </>
  );
}
