import React, { useState } from "react";
import Alert from "./Alert";
import "./styles.css";

const App = () => {
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  return (
    <div className="app-container">
      <h2>Reusable Alert Component</h2>
      <button onClick={() => showAlert("success", "success")}>Success</button>
      <button onClick={() => showAlert("warning", "warning")}>Warning</button>
      <button onClick={() => showAlert("error", "error")}>Error</button>

      {alert.message && <Alert message={alert.message} type={alert.type} />}
    </div>
  );
};

export default App;
