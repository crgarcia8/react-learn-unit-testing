import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { URL } from "../config/constants";
import Plantilla from "./Plantilla";
import { Button } from "@mui/material";

const Examen2 = () => {
  const [code, setCode] = useState(`function multiply(a, b, c) {
    return c * b * d;
};`);
  const [message, setMessage] = useState("");
  const texto = (
    <p>
      Create a function called <strong>multiply</strong> that accepts three
      arguments and returns the result of multiplying them.
    </p>
  );
  const ejecutarPruebas = async (code, unitTest) => {
    const response = await fetch(`${URL}/execute`, {
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

  const editor = () => (
    <Editor
      className="test"
      defaultLanguage="javascript"
      value={code}
      theme="vs-dark"
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
    />
  );

  const buttonRunTest = () => (
    <Button
      variant="contained"
      onClick={() => ejecutarPruebas(code, "examen2")}
      fullWidth
    >
      Run Tests
    </Button>
  );

  return Plantilla(editor, buttonRunTest, texto, message);
};

export default Examen2;
