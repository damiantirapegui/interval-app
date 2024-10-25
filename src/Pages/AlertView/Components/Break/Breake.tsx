import "./Breake.css";
import { motion } from "framer-motion";

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
        <motion.div
          className="pause-dots-container"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.div className="pause-dot" />
          <motion.div className="pause-dot" />
        </motion.div>

        <motion.div
          className="pause-alert-container"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h2 className="pause-alert">Pause & breathe</h2>
          <motion.p
            className="timer"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {passTime.minutes.toString().padStart(2, "0")}:
            {passTime.seconds.toString().padStart(2, "0")}
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};
