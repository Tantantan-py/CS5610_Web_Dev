import "../css/common.css";
import "../css/rules.css";

function Rules() {
  return (
    <main className="rules-main-container">
      <h2>Game Rules</h2>
      <ol>
        <li>
          <strong>Objective:</strong> Sink all of your opponent's ships before
          they sink yours.
        </li>
        <li>
          <strong>Setup:</strong> Each player places their fleet of ships on a
          10x10 grid. Ships cannot overlap and must be placed either
          horizontally or vertically.
        </li>
        <li>
          <strong>Fleet Composition:</strong> Each player has the following
          ships:
          <table className="type-table">
            <thead>
              <tr>
                <th>Carrier</th>
                <th>Battleship</th>
                <th>Cruiser</th>
                <th>Destroyers</th>
                <th>Submarines</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 spaces</td>
                <td>4 spaces</td>
                <td>3 spaces</td>
                <td>3 spaces each (x2)</td>
                <td>2 spaces each (x2)</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <strong>Gameplay:</strong>
          <ul>
            <li>Players take turns calling out coordinates (e.g., B4, C7).</li>
            <li>
              If a shot hits a ship, the opponent must declare "Hit." If it
              misses, "Miss."
            </li>
            <li>When all squares of a ship are hit, it's declared "Sunk."</li>
          </ul>
        </li>
        <li>
          <strong>Winning:</strong> The first player to sink all of their
          opponent’s ships wins.
        </li>
      </ol>

      <section id="credits">
        <h3>Made By</h3>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:fake.email@example.com">fake.email@example.com</a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/fakeuser"
              target="_blank"
              rel="noreferrer"
            >
              github.com/fakeuser
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/fakeuser"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/fakeuser
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Rules;
