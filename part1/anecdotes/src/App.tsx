import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const makeRandomIndex = () => Math.floor(Math.random() * anecdotes.length);

  const [selected, setSelected] = useState(makeRandomIndex());
  const [upvotes, setUpvotes] = useState(
    Array.from({ length: anecdotes.length }, () => 0)
  );

  const handleRandomAnecdote = () => {
    setSelected(makeRandomIndex());
  };

  const handleUpvote = () => {
    const newUpvotes = [...upvotes];
    newUpvotes[selected] += 1;
    setUpvotes(newUpvotes);
  };

  return (
    <main>
      <section>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>
          <strong>This anecdote has {upvotes[selected]} upvotes</strong>
        </p>
        <div>
          <button onClick={handleUpvote}>Vote</button>
          <button onClick={handleRandomAnecdote}>Next anecdote</button>
        </div>
      </section>
      <section>
        <h2>Anecdote with the most votes</h2>
        <p>{anecdotes[upvotes.indexOf(Math.max(...upvotes))]}</p>
        <strong>This anecdote has {upvotes[selected]} upvotes</strong>
      </section>
    </main>
  );
};

export default App;
