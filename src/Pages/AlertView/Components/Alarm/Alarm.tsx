import "./Alarm.css";
import { motion } from "framer-motion";
export function Alarm() {
  return (
    <div className="alarm-container">
      <motion.img
        src="./images/alarm-icon.png"
        alt="alarm icon"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <h1 className="alert">Times up!</h1>
    </div>
  );
}
