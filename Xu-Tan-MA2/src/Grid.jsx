import React, { useState } from "react";
import Cell from "./Cell";
import "./Grid.css";

function Grid() {
  const numRows = 2;
  const numCols = 2;
  const totalCells = numRows * numCols;
  const [cellStates, setCellStates] = useState(Array(totalCells).fill(false));

  const handleCellToggle = (index) => {
    setCellStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const clickedCount = cellStates.filter((state) => state).length;

  const cells = [];
  for (let i = 0; i < totalCells; i++) {
    cells.push(
      <Cell
        key={i}
        isClicked={cellStates[i]}
        onToggle={() => handleCellToggle(i)}
      />
    );
  }

  return (
    <div>
      <h2>Count: {clickedCount}</h2>
      <div className="grid">{cells}</div>
    </div>
  );
}

export default Grid;
