import "./App.css";
// import { Loading } from "./Pages/Loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./Pages/Loading/Loading";
import { SetTimer } from "./Pages/SetTimer/SetTimer";
import { TimerTemplate } from "./Pages/TimerTemplate/TimerTemplate";
import { useState } from "react";
import Menu from "./Pages/Menu/Menu";

export const App = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleMenu = () => {
    setMenuIsActive((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <>
      <div className="logo" onClick={handleMenu}>
        <img
          src={
            menuIsActive ? "./images/whiteLogo.png" : "./images/blackLogo.png"
          }
        />
      </div>
      <Menu isActive={menuIsActive} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="setTimer/" element={<SetTimer />} />
          <Route path="timer-template" element={<TimerTemplate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
