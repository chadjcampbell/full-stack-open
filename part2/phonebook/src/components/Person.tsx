import { Dispatch, SetStateAction } from "react";
import personService from "../services/personService";

export type PersonType = {
  name: string;
  number: string;
  id: string;
};

type PersonProps = {
  person: PersonType;
  persons: PersonType[];
  setPersons: Dispatch<SetStateAction<PersonType[]>>;
};

const Person = ({ person, persons, setPersons }: PersonProps) => {
  const handleDelete = () => {
    const confirmName = `Delete ${person.name}?`;
    if (confirm(confirmName)) {
      personService.deletePerson(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    } else {
      return;
    }
  };
  return (
    <div>
      <p>
        {person.name}: {person.number}{" "}
        <button onClick={handleDelete}>Delete</button>
      </p>
    </div>
  );
};

export default Person;
