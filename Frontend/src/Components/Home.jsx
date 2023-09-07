import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./about";
import Project from "./project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
