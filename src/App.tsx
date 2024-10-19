import "./App.css";
// import { Loading } from "./Pages/Loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./Pages/Loading/Loading";
import { SetTimer } from "./Pages/SetTimer/SetTimer";

export function App() {
  return (
    <>
      <div className="logo">
        <img src="./images/blackLogo.png" alt="" />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="setTimer" element={<SetTimer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
