import Milliseconds from "./Milliseconds";

function App() {
  const currentTime = new Date();

  const greeting = (
    <div>
      Hello Home Page!
      <Milliseconds />
    </div>
  );

  return greeting;
}

export default App;
