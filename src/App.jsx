import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Board from "./components/Board";
import Rules from "./components/Rules"
import StyleSelect from "./components/StyleSelect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/style" element={<StyleSelect />} />
        <Route path="/game-animals" element={<Board theme="animals"/>} />
        <Route path="/game-food" element={<Board theme="food"/>} />
        <Route path="/game-sports" element={<Board theme="sports"/>} />
      </Routes>
    </Router>
  );
}

export default App;