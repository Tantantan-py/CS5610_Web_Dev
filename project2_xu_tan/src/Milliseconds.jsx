import { useState } from "react";

export default function Milliseconds() {
  const [currentTimeInMs, setCurrentTimeInMs] = useState(
    new Date().getMilliseconds()
  );

  function updateCurrentTimeInMs() {
    setCurrentTimeInMs(new Date().getMilliseconds());
  }

  return (
    <div>
      <h1>Milliseconds</h1>
      <p>Now getMilliseconds is {currentTimeInMs}</p>
      <button onClick={updateCurrentTimeInMs}>
        Click here to update the timestamp :D
      </button>
    </div>
  );
}
