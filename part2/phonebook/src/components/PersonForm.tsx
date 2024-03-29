import { Dispatch, FormEvent, SetStateAction } from "react";
import { PersonType } from "./Person";
import personService from "../services/personService";

type PersonFormProps = {
  persons: PersonType[];
  setPersons: Dispatch<SetStateAction<PersonType[]>>;
  setShowToast: Dispatch<SetStateAction<boolean>>;
  setToastMessage: Dispatch<SetStateAction<string>>;
};

const PersonForm = ({
  persons,
  setPersons,
  setShowToast,
  setToastMessage,
}: PersonFormProps) => {
  const addPerson = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const data = new FormData(form);
    const newPerson = {
      name: data.get("name") as string,
      number: data.get("number") as string,
      id: (persons.length + 1).toString(),
    };
    const duplicatePerson = persons.find((p) => p.name === newPerson.name);
    // if person already in phonebook - confirm then update
    if (duplicatePerson) {
      if (
        confirm(
          `${newPerson.name} is already in the phonebook, would you like to update their number?`
        )
      ) {
        try {
          await personService.updatePerson(duplicatePerson.id, newPerson);
          setPersons(
            persons.map((p) =>
              p.id === duplicatePerson.id
                ? { ...p, number: newPerson.number }
                : p
            )
          );
          setToastMessage(`Phone number updated for ${newPerson.name}`);
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            setToastMessage("");
          }, 2750);
          form.reset();
        } catch (err) {
          console.error(err);
          setToastMessage(
            `Error: ${newPerson.name} no longer exists in the phonebook`
          );
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            setToastMessage("");
          }, 2750);
        }
      } else {
        return;
      }
    } else {
      setToastMessage(`${newPerson.name} added to phonebook`);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setToastMessage("");
      }, 2750);
      personService.createPerson(newPerson);
      setPersons(persons.concat(newPerson));
      form.reset();
    }
  };

  return (
    <form onSubmit={(e) => addPerson(e)}>
      <h3>Add to phonebook</h3>
      <div>
        <label htmlFor="name">Name:</label>

        <input required autoComplete="off" name="name" id="name" type="text" />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          required
          autoComplete="off"
          name="number"
          id="number"
          type="text"
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
