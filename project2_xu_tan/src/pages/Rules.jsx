import { Link } from "react-router-dom";
import "../css/common.css";
import "../css/rules.css";

function Rules() {
  return (
    <div>
      <header>
        <h1 className="logo">
          <Link to="/">Battleship</Link>
        </h1>
      </header>

      <main className="rules-main-container">
        <h2>Game Rules</h2>
        <p>Rules content goes here...</p>

        <Link to="/">
          <button className="home-btn">Back to Home</button>
        </Link>
      </main>
    </div>
  );
}

export default Rules;
