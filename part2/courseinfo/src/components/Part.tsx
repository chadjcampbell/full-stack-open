import { PartsType } from "./Content";

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

export default Part;
