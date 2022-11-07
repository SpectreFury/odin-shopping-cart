import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="keyboard" element={<Keyboard />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
