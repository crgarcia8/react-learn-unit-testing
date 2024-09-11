import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const Examen2 = () => {
  const [code, setCode] = useState(`// Escribe tu código aquí

//Crear una funcion llamada multiply que tenga 2 argumentos y devuelva la suma de estos

function multiply(a, b, c) {
    return c * b * c;
};`);
  const [message, setMessage] = useState("");

  const ejecutarPruebas = async (code, unitTest) => {
    const response = await fetch("https://react-learn-unit-testing-api.vercel.app/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, unitTest }),
    });
    const result = await response.text();
    setMessage(result);
  };
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div>
      <Editor
        height="200px"
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"
        onChange={handleEditorChange}
      />
      <button onClick={() => ejecutarPruebas(code, "examen2")}>
        Ejecutar Pruebas
      </button>
      <br />
      <br />
      <br />
      <span>{message}</span>
    </div>
  );
};

export default Examen2;
