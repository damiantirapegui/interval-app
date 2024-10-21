import "./AlertView.css";
import { Alarm } from "./Components/Alarm/Alarm";
import { Breake } from "./Components/Break/Breake";
import { DynamicButton } from "./Components/DynamicButton/DynamicButton";

export function AlertView() {
  return (
    <>
      <div className="breake-body">
        <div className="background-color-container">
          <div className="background-one">
            <div className="background-two">
              <div className="background-three">
                <div className="center">
                  <Alarm />
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
}
