import "./Loading.css";
import "./../../index.css";
import { easeOut, motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function Loading() {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    // To see the effect on tapping the link
    setTimeout(() => {
      navigate("/setTimer");
    }, 1000);
  };

  return (
    <>
      <motion.div className="loading-page-body" whileTap={{ scale: 1.2 }}>
        <Link to="setTimer" className="Link-to-setTimer" onClick={handleClick}>
          <motion.div
            className="loading-page-container"
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: easeOut }}
          >
            <img src="./images/whiteLogo.png" alt="" />
            <p style={{ fontSize: "20px" }}>INTERVAL</p>
            <p className="subheading">For all your timing needs</p>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}
