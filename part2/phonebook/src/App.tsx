import { useState } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <hr />
      <Filter />
      <hr />
      <PersonForm />
      <hr />
      <h2>Numbers</h2>
      {persons.length === 0 ? (
        <p>The phonebook is empty</p>
      ) : (
        persons.map((person) => <Person key={person.id} person={person} />)
      )}
    </div>
  );
};

export default App;
