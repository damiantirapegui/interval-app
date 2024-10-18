import "./App.css";
// import { Loading } from "./Pages/Loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "./Pages/Loading/Loading";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}
