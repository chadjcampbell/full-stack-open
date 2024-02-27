const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={total} />
    </div>
  );
};

const Header = ({ course }: { course: string }) => {
  return <h1>{course}</h1>;
};

type ContentProps = {
  part1: string;
  part2: string;
  part3: string;
  exercises1: number;
  exercises2: number;
  exercises3: number;
};

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}: ContentProps) => {
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

type PartProps = {
  part: string;
  exercises: number;
};
const Part = ({ part, exercises }: PartProps) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = ({ total }: { total: number }) => {
  return <p>Number of exercises {total}</p>;
};

export default App;
