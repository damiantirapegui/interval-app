import "./SetTimer.css";
import { motion } from "framer-motion";

export function SetTimer() {
  return (
    <>
      <div className="setTimer-body">
        <div className="set-time">
          <motion.div className=" arrow arrow--left decrease"></motion.div>
          <div className="minutes">10</div>
          <div className=" arrow arrow--right increase"></div>
        </div>
      </div>
    </>
  );
}
