import Part from "./Part";

export type PartsType = {
  name: string;
  exercises: number;
  id: number;
};

type ContentProps = {
  parts: PartsType[];
};

const Content = ({ parts }: ContentProps) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

export default Content;
