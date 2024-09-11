import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const Examen1 = () => {
  const [code, setCode] = useState(`// Escribe tu código aquí

//Crear una funcion llamada sum que tenga 2 argumentos y devuelva la suma de estos

function sum(a, b) {
    return b + b
};`);
  const [message, setMessage] = useState("");

  const ejecutarPruebas = async (code, unitTest) => {
    const response = await fetch("http://localhost:3001/execute", {
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
      <button onClick={() => ejecutarPruebas(code, "examen1")}>Ejecutar Pruebas</button>
      <br />
      <br />
      <br />
      <span>{message}</span>
    </div>
  );
};

export default Examen1;
