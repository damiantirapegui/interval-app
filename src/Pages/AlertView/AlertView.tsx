import "./AlertView.css";
import { Alarm } from "./Components/Alarm/Alarm";
import { Breake } from "./Components/Break/Breake";
import { DynamicButton } from "./Components/DynamicButton/DynamicButton";

interface AlertProps {
  showAlarm: boolean;
  showBreak: boolean;
  passTimer: {
    seconds: number;
    minutes: number;
  };
}

export const AlertView: React.FC<AlertProps> = ({
  showAlarm,
  showBreak,
  passTimer,
}) => {
  return (
    <>
      <div className="breake-body">
        <div className="background-color-container">
          <div className="background-one">
            <div className="background-two">
              <div className="background-three">
                <div className="center">
                  <div style={{ opacity: showAlarm ? 1 : 0 }}>
                    <Alarm />
                  </div>
                  <div style={{ opacity: showBreak ? 1 : 0 }}>
                    <Breake passTime={passTimer} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DynamicButton />
    </>
  );
};
