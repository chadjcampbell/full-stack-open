import { CourseType } from "../App";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

type CourseProps = {
  course: CourseType;
};

const Course = ({ course }: CourseProps) => {
  const total = course.parts.reduce((acc, part) => {
    acc += part.exercises;
    return acc;
  }, 0);
  return (
    <main>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </main>
  );
};

export default Course;
