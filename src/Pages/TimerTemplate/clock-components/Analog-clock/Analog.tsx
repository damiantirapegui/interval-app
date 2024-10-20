import "./Analog.css";

export function Analog() {
  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <div className="clock__second"></div>
          <div className="clock__minute"></div>
          <div className="clock__hour"></div>
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
