import { use } from "framer-motion/client";
import "./SetTimer.css";
import { motion } from "framer-motion";
import { useState } from "react";

export function SetTimer() {
  const [showMinuts, setShowMinuts] = useState(0);
  const [isBouncing, setIsBouncing] = useState(false);

  const toggleCountUp = () => {
    setShowMinuts(showMinuts + 1);
    if (showMinuts === 60) {
      setShowMinuts(60);
    }
    setIsBouncing(true);
    triggerBounce();
  };

  const toggleCountDown = () => {
    setShowMinuts(showMinuts - 1);

    if (showMinuts === 0) {
      setShowMinuts(0);
    }
    setIsBouncing(true);

    triggerBounce();
  };

  const triggerBounce = () => {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false); // Återställ tillstånd efter animation
    }, 100); // Samma tid som animationens varaktighet
  };

  return (
    <>
      <div className="setTimer-body">
        <div className="set-time">
          <motion.div
            className=" arrow arrow--left decrease"
            onClick={toggleCountDown}
          ></motion.div>
          <div className="minutes-container">
            <motion.p
              className="minutes"
              animate={isBouncing ? { scale: [1, 1.5, 1] } : { fontSize: 80 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              {showMinuts}
            </motion.p>
          </div>
          <div
            className=" arrow arrow--right increase"
            onClick={toggleCountUp}
          ></div>
        </div>
      </div>
    </>
  );
}
