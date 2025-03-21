import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/common.css";
import "../css/game.css";

const SHIP_SIZES = [5, 4, 3, 3, 2];

function createEmptyBoard() {
  return Array(100).fill("");
}

function placeShips(board) {
  const newBoard = [...board];
  for (let size of SHIP_SIZES) {
    let placed = false;
    while (!placed) {
      // Randomly choose horizontal (true) or vertical (false) orientation.
      const horizontal = Math.random() < 0.5;
      if (horizontal) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * (10 - size + 1));
        let canPlace = true;
        // Check if all cells in this row segment are empty.
        for (let i = 0; i < size; i++) {
          if (newBoard[row * 10 + col + i] === "ship") {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < size; i++) {
            newBoard[row * 10 + col + i] = "ship";
          }
          placed = true;
        }
      } else {
        const col = Math.floor(Math.random() * 10);
        const row = Math.floor(Math.random() * (10 - size + 1));
        let canPlace = true;
        // Check if all cells in this column segment are empty.
        for (let i = 0; i < size; i++) {
          if (newBoard[(row + i) * 10 + col] === "ship") {
            canPlace = false;
            break;
          }
        }
        if (canPlace) {
          for (let i = 0; i < size; i++) {
            newBoard[(row + i) * 10 + col] = "ship";
          }
          placed = true;
        }
      }
    }
  }
  return newBoard;
}

function checkVictory(board) {
  // A board is "cleared" when no cell still contains a ship.
  return board.indexOf("ship") === -1;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function Game() {
  const { mode } = useParams();
  // gameMode will be "normal" or "easy" (free play). Default to normal if not provided.
  const gameMode = mode ? mode.toLowerCase() : "normal";

  const [playerBoard, setPlayerBoard] = useState([]);
  const [enemyBoard, setEnemyBoard] = useState([]);
  const [currentTurn, setCurrentTurn] = useState("player");
  const [message, setMessage] = useState("Your turn");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Initialize boards on component mount.
  useEffect(() => {
    const initPlayerBoard = placeShips(createEmptyBoard());
    const initEnemyBoard = placeShips(createEmptyBoard());
    setPlayerBoard(initPlayerBoard);
    setEnemyBoard(initEnemyBoard);
  }, []);

  // Check victory conditions whenever boards update.
  useEffect(() => {
    if (checkVictory(enemyBoard)) {
      setWinner("Player");
      setGameOver(true);
    } else if (gameMode === "normal" && checkVictory(playerBoard)) {
      setWinner("AI");
      setGameOver(true);
    }
  }, [playerBoard, enemyBoard, gameMode]);

  // Timer: update every second unless the game is over.
  useEffect(() => {
    if (gameOver) return;
    const timerId = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [gameOver]);

  const handleEnemyCellClick = (index) => {
    if (gameOver || currentTurn !== "player") return;
    // Prevent clicking a cell that's already been fired upon.
    if (enemyBoard[index] === "hit" || enemyBoard[index] === "miss") return;

    const newEnemyBoard = [...enemyBoard];
    if (newEnemyBoard[index] === "ship") {
      newEnemyBoard[index] = "hit";
      setMessage("Hit!");
    } else {
      newEnemyBoard[index] = "miss";
      setMessage("Miss!");
    }
    setEnemyBoard(newEnemyBoard);

    if (gameMode === "normal") {
      // Normal mode: switch turn to AI.
      setCurrentTurn("ai");
      setTimeout(aiTurn, 1000);
    }
    // In easy mode, no AI turn; remain on player's turn.
  };

  const aiTurn = () => {
    if (gameOver) return;
    // Find available indices on the player's board.
    const availableIndices = [];
    playerBoard.forEach((cell, index) => {
      if (cell !== "hit" && cell !== "miss") availableIndices.push(index);
    });
    if (availableIndices.length === 0) return;
    const randomIndex =
      availableIndices[Math.floor(Math.random() * availableIndices.length)];
    const newPlayerBoard = [...playerBoard];
    if (newPlayerBoard[randomIndex] === "ship") {
      newPlayerBoard[randomIndex] = "hit";
      setMessage("AI hit your ship! Your turn.");
    } else {
      newPlayerBoard[randomIndex] = "miss";
      setMessage("AI missed! Your turn.");
    }
    setPlayerBoard(newPlayerBoard);
    setCurrentTurn("player");
  };

  const restartGame = () => {
    setGameOver(false);
    setWinner("");
    setMessage("Your turn");
    setCurrentTurn("player");
    setTimeElapsed(0);
    const initPlayerBoard = placeShips(createEmptyBoard());
    const initEnemyBoard = placeShips(createEmptyBoard());
    setPlayerBoard(initPlayerBoard);
    setEnemyBoard(initEnemyBoard);
  };

  // Render helpers.
  const renderPlayerCell = (cell) => {
    if (cell === "hit") return "✔";
    if (cell === "miss") return "X";
    if (cell === "ship") return "⛴️"; // Show your own ships.
    return "";
  };

  const renderEnemyCell = (cell) => {
    if (cell === "hit") return "✔";
    if (cell === "miss") return "X";
    // In both game modes, enemy ships remain hidden until hit.
    return "";
  };

  return (
    <main className="game-main-container">
      {/* Top header with Game Over message, Reset button, and Timer */}
      <div className="game-header">
        {gameOver && <h1>Game over! {winner} Won!</h1>}
        <button onClick={restartGame}>Reset</button>
        <div className="timer">Time Elapsed: {formatTime(timeElapsed)}</div>
      </div>

      <p>{message}</p>

      {/* In normal mode, display the player's board */}
      {gameMode === "normal" && (
        <>
          <h2>Your Board</h2>
          <div className="game-board player-board">
            {playerBoard.map((cell, index) => (
              <div key={index} className={`cell ${cell}`}>
                {renderPlayerCell(cell)}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Always show the enemy board.
          In "easy" (free play) mode, add a note in the heading. */}
      <h2>Enemy Board {gameMode === "easy" && "(Free Play)"}</h2>
      <div className="game-board enemy-board">
        {enemyBoard.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell}`}
            onClick={() => handleEnemyCellClick(index)}
          >
            {renderEnemyCell(cell)}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Game;
