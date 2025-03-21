import { Link, useNavigate } from "react-router-dom";
import "../css/common.css";
import "../css/home.css";
import logo from "../assets/logo.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>

        {/* Mobile Navigation Toggle */}
        <input type="checkbox" id="menuToggle" />
        <label htmlFor="menuToggle">☰ Menu</label>

        <nav>
          <label htmlFor="menuToggle">Close</label>
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/game">Play Game</Link>
            </li>
            <li>
              <Link to="/rules">Game Rules</Link>
            </li>
            <li>
              <Link to="/highscores">High Scores Rank</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Home Page Content */}
      <div className="home-main-container">
        <p className="game-intro">
          Welcome to Battleship Game! <br />
          Strategically place your fleet, aim your shots, and sink your
          opponent’s ships before they sink yours.
        </p>

        <p className="game-invite">
          Let's test your tactical skills in our naval combat game.
        </p>

        <button className="play-btn" onClick={() => navigate("/game")}>
          Play Game!
        </button>
        <button className="rules-btn" onClick={() => navigate("/rules")}>
          New to the Game?
        </button>
      </div>
    </div>
  );
}

export default Home;
