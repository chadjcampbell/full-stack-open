import { ChangeEvent, Dispatch, SetStateAction } from "react";

type FilterProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

const Filter = ({ setFilter }: FilterProps) => {
  const filterPeople = (e: ChangeEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    setFilter(input.value);
  };

  return (
    <>
      <h3>Search phonebook: </h3>
      <label htmlFor="filter">Name:</label>
      <input
        onChange={(e) => filterPeople(e)}
        autoComplete="none"
        id="filter"
        name="filter"
        type="text"
      />
    </>
  );
};

export default Filter;
