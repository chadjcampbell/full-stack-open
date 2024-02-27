const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const total = course.parts.reduce((acc, part) => {
    acc += part.exercises;
    return acc;
  }, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

const Header = ({ course }: { course: string }) => {
  return <h1>{course}</h1>;
};

type PartsType = {
  name: string;
  exercises: number;
};

type ContentProps = {
  parts: PartsType[];
};

const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  );
};

type PartProps = {
  part: PartsType;
};
const Part = ({ part }: PartProps) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ total }: { total: number }) => {
  return <p>Number of exercises {total}</p>;
};

export default App;
