import { Dispatch, FormEvent, SetStateAction } from "react";
import { PersonType } from "./Person";

type PersonFormProps = {
  persons: PersonType[];
  setPersons: Dispatch<SetStateAction<PersonType[]>>;
};

const PersonForm = ({ persons, setPersons }: PersonFormProps) => {
  const addPerson = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const newPerson = {
      name: data.get("name") as string,
      number: data.get("number") as string,
      id: persons.length + 1,
    };
    console.log(newPerson);
    
  return (
    <form onSubmit={(e) => addPerson(e)}>
      <h3>Add to phonebook</h3>
      <div>
        <label htmlFor="name">Name:</label>

        <input autoComplete="none" name="name" id="name" type="text" />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input autoComplete="none" name="number" id="number" type="text" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
