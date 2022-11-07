import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
import Keyboard from "./Components/Keyboard/Keyboard";
import Details from "./Components/Details/Details";

import HelloGanss from "./assets/keyboards/helloganss.jpg";
import HelloGanssAlt from "./assets/keyboards/helloganss-alt.jpg";
import DuckyOne from "./assets/keyboards/ducky-one.jpg";
import RoyalKludge from "./assets/keyboards/royal-kludge.jpg";

const KEYBOARD_LIST = [
  {
    id: "hello-ganss-gs-87c-ht",
    name: "Hello Ganss GS 87C-HT",
    img: HelloGanss,
    price: "9,999.00",
  },
  {
    id: "hello-ganss-alt-83g",
    name: "Hello Ganss ALT 83G",
    img: HelloGanssAlt,
    price: "7,199.00",
  },
  {
    id: "ducky-one",
    name: "Ducky One",
    img: DuckyOne,
    price: "12,499.00",
  },
  {
    id: "royal-kludge-rk61",
    name: "Royal Kludge RK61",
    img: RoyalKludge,
    price: "4,499.00",
  },
];

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="keyboard"
          element={<Keyboard keyboards={KEYBOARD_LIST} />}
        />
        <Route
          path="keyboard/:id"
          element={<Details keyboards={KEYBOARD_LIST} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
