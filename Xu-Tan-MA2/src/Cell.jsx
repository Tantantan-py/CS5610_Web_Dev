import React from "react";
import "./Cell.css";

const Cell = ({ isClicked, onToggle }) => {
  return (
    <div
      className={`cell ${isClicked ? "clicked" : ""}`}
      onClick={onToggle}
    ></div>
  );
};

export default Cell;
