import "./Loading.css";
import "./../../index.css";
import { easeOut, motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

/* Loading page */
export function Loading() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  // Click function to render setTime page with a animation switch
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setClicked(true); // Animation switch

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
            animate={clicked ? { x: 400 } : { x: 0 }}
            transition={{ duration: 2, ease: easeOut }}
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
