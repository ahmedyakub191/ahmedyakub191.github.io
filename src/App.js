// App.js
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sections from "./components/Sections";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Sections />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
