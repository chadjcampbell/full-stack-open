import { useEffect, useState } from "react";
import Person, { PersonType } from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState<PersonType[]>([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    async function fetchPeople() {
      const res = await axios.get("http://localhost:3001/persons");

      setPersons(res.data);
      setFilteredPersons(res.data);
    }
    if (persons.length === 0) {
      fetchPeople();
    }
  }, [persons.length]);

  return (
    <div>
      <h2>Phonebook</h2>
      <hr />
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <hr />
      <PersonForm persons={persons} setPersons={setPersons} />
      <hr />
      <h2>Numbers</h2>
      {filteredPersons.length === 0 ? (
        <p>No results in the phonebook</p>
      ) : (
        filteredPersons.map((person) => (
          <Person key={person.id} person={person} />
        ))
      )}
    </div>
  );
};

export default App;
