// App.js
import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Examen1 from "./Exams/Examen1";
import Examen2 from "./Exams/Examen2";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/examen1" element={<Examen1 />} />
        <Route path="/examen2" element={<Examen2 />} />
        <Route path="*" element={<Navigate to="/examen1" />} />
      </Routes>
    </>
  );
};

export default App;
