import React from "react";
import OneToFifty from "./OneToFifty";
import TTTest from "./TTTest";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OneToFifty />} />
      <Route path="/test" element={<TTTest />} />
    </Routes>
  );
}

export default App;
