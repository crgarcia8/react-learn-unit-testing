// App.js
import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Examen1 from "./Exams/Examen1";
import Examen2 from "./Exams/Examen2";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/challenge1" element={<Examen1 />} />
        <Route path="/challenge2" element={<Examen2 />} />
        <Route path="*" element={<Navigate to="/challenge1" />} />
      </Routes>
    </>
  );
};

export default App;
