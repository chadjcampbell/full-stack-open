import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <main>
      <section>
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
      </section>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </main>
  );
};

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  average: number;
  positive: number;
};

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  average,
  positive,
}: StatisticsProps) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <section>
      <h2>Statistics</h2>
      <table>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <br />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
      </table>
    </section>
  );
};

type StatisticLineProps = {
  text: string;
  value: number;
};

const StatisticLine = ({ text, value }: StatisticLineProps) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
      {text == "Positive" && "%"}
    </tr>
  );
};

export default App;
