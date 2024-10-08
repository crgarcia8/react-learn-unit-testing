import "./Examen1.css";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { URL } from "../config/constants";
import { Button, Grid2 } from "@mui/material";
import Plantilla from "./Plantilla";

const Examen1 = () => {
  const [code, setCode] = useState(`function sum(a, b) {
    return b + b
};`);
  const [message, setMessage] = useState("");

  const texto = (
    <p>
      Create a function called <strong>sum</strong> that takes 2 arguments and
      returns the sum of these.
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
      onClick={() => ejecutarPruebas(code, "examen1")}
      fullWidth
    >
      Run Tests
    </Button>
  );

  return Plantilla(editor, buttonRunTest, texto, message);
};

export default Examen1;
