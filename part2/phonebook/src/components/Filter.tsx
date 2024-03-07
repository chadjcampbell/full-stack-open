import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { PersonType } from "./Person";

type FilterProps = {
  persons: PersonType[];
  filteredPersons: PersonType[];
  setFilteredPersons: Dispatch<SetStateAction<PersonType[]>>;
};

const Filter = ({
  persons,
  filteredPersons,
  setFilteredPersons,
}: FilterProps) => {
  const filterPeople = (e: ChangeEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    const name = input.value;
    const filteredPeople = persons.filter((person) =>
      person.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredPersons(filteredPeople);
  };
  console.log(filteredPersons);

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
