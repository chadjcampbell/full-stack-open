import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <main>
      <h1>Give Feedback</h1>
      <button
        onClick={() => {
          setGood((prev) => prev + 1);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral((prev) => prev + 1);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad((prev) => prev + 1);
        }}
      >
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </main>
  );
};

export default App;
