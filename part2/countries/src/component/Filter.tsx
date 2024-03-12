import { ChangeEvent, Dispatch, SetStateAction } from "react";

type FilterProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter = ({ setFilter }: FilterProps) => {
  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <>
      Find Countries:{"  "}
      <input onChange={(e) => updateFilter(e)} type="text" autoComplete="off" />
    </>
  );
};

export default Filter;
