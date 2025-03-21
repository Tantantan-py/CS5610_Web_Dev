import { Link } from "react-router-dom";
import "../css/common.css";
import "../css/highscores.css";

function HighScores() {
  return (
    <div>
      <header>
        <h1 className="logo">
          <Link to="/">Battleship</Link>
        </h1>
      </header>

      <main className="highscores-main-container">
        <h2>High Scores</h2>
        <p>Leaderboard content goes here...</p>

        <Link to="/">
          <button className="home-btn">Back to Home</button>
        </Link>
      </main>
    </div>
  );
}

export default HighScores;
