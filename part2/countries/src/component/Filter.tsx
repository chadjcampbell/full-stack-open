import { ChangeEvent, Dispatch, SetStateAction } from "react";

type FilterProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter = ({ filter, setFilter }: FilterProps) => {
  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <>
      Find Countries:{"  "}
      <input
        value={filter}
        onChange={(e) => updateFilter(e)}
        type="text"
        autoComplete="off"
      />
    </>
  );
};

export default Filter;
