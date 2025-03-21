import { Link } from "react-router-dom";
import "../css/common.css";
import "../css/game.css";

function Game() {
  return (
    <div>
      <header>
        <h1 className="logo">
          <Link to="/">Battleship</Link>
        </h1>
      </header>

      <main className="game-main-container">
        <h2>Welcome to the Game!</h2>
        <p>Game logic goes here...</p>

        <Link to="/">
          <button className="home-btn">Back to Home</button>
        </Link>
      </main>
    </div>
  );
}

export default Game;
