import "./AlertView.css";
import { Alarm } from "./Components/Alarm/Alarm";
import { Breake } from "./Components/Break/Breake";
import { DynamicButton } from "./Components/DynamicButton/DynamicButton";

interface AlertProps {
  showAlarm: boolean;
}

export const AlertView: React.FC<AlertProps> = ({ showAlarm }) => {
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
                  <Breake />
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
