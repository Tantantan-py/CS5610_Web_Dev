import React from "react";
import "./styles.css"; // Assuming styles are in a separate file

const ChildComponent = ({ isVisible, bgColor }) => {
  // Fill in 1: Destructure props in the parameter
  return (
    <div>
      {/* 1. Conditionally render the message based on isVisible */}
      {isVisible && (
        <div className={`message ${bgColor}`}>
          {" "}
          {/* Fill in 3: Use bgColor as the CSS class */}
          <p>This is a conditional message!</p>
        </div>
      )}
    </div>
  );
};

export default ChildComponent;
