import React from "react";
import "../css/common.css";
import "../css/game.css";

function Game() {
  // Pre-defined board state for the player board (10 rows x 10 columns)
  const playerBoard = [
    // Row 1
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    "ship",
    "ship",
    "ship",
    "",
    // Row 2
    "",
    "",
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    "",
    "",
    // Row 3
    "",
    "",
    "",
    "hit",
    "",
    "",
    "",
    "",
    "miss",
    "",
    // Row 4
    "",
    "",
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    "ship",
    "",
    // Row 5
    "",
    "",
    "",
    "",
    "",
    "",
    "hit",
    "",
    "",
    "",
    // Row 6
    "ship",
    "ship",
    "ship",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // Row 7
    "",
    "miss",
    "",
    "",
    "",
    "",
    "hit",
    "",
    "",
    "",
    // Row 8
    "",
    "",
    "ship",
    "",
    "",
    "",
    "",
    "",
    "miss",
    "",
    // Row 9
    "",
    "",
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    "",
    "",
    // Row 10
    "",
    "",
    "hit",
    "",
    "",
    "",
    "",
    "",
    "miss",
    "",
  ];

  // Pre-defined board state for the enemy board
  const enemyBoard = [
    // Row 1
    "hit",
    "hit",
    "",
    "",
    "miss",
    "",
    "",
    "hit",
    "miss",
    "",
    // Row 2
    "",
    "",
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    "",
    "",
    // Row 3
    "",
    "",
    "",
    "hit",
    "",
    "",
    "",
    "",
    "miss",
    "",
    // Row 4
    "",
    "",
    "",
    "ship",
    "",
    "",
    "",
    "",
    "",
    "",
    // Row 5
    "",
    "",
    "",
    "",
    "",
    "",
    "hit",
    "",
    "",
    "",
    // Row 6
    "ship",
    "ship",
    "ship",
    "",
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    // Row 7
    "",
    "miss",
    "",
    "",
    "",
    "",
    "hit",
    "",
    "",
    "",
    // Row 8
    "",
    "",
    "ship",
    "",
    "",
    "",
    "",
    "",
    "miss",
    "",
    // Row 9
    "",
    "",
    "",
    "",
    "",
    "",
    "ship",
    "ship",
    "",
    "",
    // Row 10
    "",
    "",
    "hit",
    "",
    "",
    "",
    "",
    "",
    "miss",
    "",
  ];

  return (
    <main className="game-main-container">
      {/* Restart Button */}
      <form action="/game" method="get">
        <button type="submit">Restart</button>
      </form>

      {/* Timer Section */}
      <div className="timer-container">
        <div className="timer-bar"></div>
        <div className="timer-text">Time Left</div>
      </div>

      {/* Player Board */}
      <h2>Sample Player Board:</h2>
      <div className="game-board player-board">
        {playerBoard.map((cell, index) => (
          <div key={index} className={`cell ${cell}`}>
            {cell === "hit" ? "✔" : cell === "miss" ? "X" : ""}
          </div>
        ))}
      </div>

      {/* Enemy Board */}
      <h2>Sample Enemy Board:</h2>
      <div className="game-board enemy-board">
        {enemyBoard.map((cell, index) => (
          <div key={index} className={`cell ${cell}`}>
            {cell === "hit" ? "✔" : cell === "miss" ? "X" : ""}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Game;
