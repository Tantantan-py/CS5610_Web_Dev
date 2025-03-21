import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [isVisible, setIsVisible] = useState(false); // Fill in 1
  const [bgColor, setBgColor] = useState("red"); // Fill in 2

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Fill in 3
  };

  const changeColor = (color) => {
    setBgColor(color); // Fill in 4
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Message Visibility</button>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <ChildComponent isVisible={isVisible} bgColor={bgColor} />
    </div>
  );
};

export default ParentComponent;
