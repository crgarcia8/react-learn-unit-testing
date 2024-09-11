// App.js
import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Examen1 from "./Exams/Examen1";
import Examen2 from "./Exams/Examen2";

const App = () => {
  return (
    <>
      <div id="links">
        <Link id="link1" to="/examen1">
          Examen 1
        </Link>
        <Link id="link2" to="/examen2">
          Examen 2
        </Link>
        <Link id="link2" to="/examen3">
          Examen 3
        </Link>
        <Link id="link2" to="/examen4">
          Examen 4
        </Link>
        <Link id="link2" to="/examen5">
          Examen 5
        </Link>
        <Link id="link2" to="/examen6">
          Examen 6
        </Link>
      </div>
      <Routes>
        <Route path="/examen1" element={<Examen1 />} />
        <Route path="/examen2" element={<Examen2 />} />
        <Route path="*" element={<Navigate to="/examen1" />} />
      </Routes>
    </>
  );
};

export default App;
