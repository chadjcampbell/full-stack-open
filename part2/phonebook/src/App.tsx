import { useEffect, useState } from "react";
import Person, { PersonType } from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personService from "./services/personService";
import Toast from "./components/Toast";

const App = () => {
  const [persons, setPersons] = useState<PersonType[]>([]);
  const [filter, setFilter] = useState("");

  const [showToast, setShowToast] = useState(true);
  const [toastMessage, setToastMessage] = useState("Test");

  useEffect(() => {
    async function fetchPeople() {
      const data = await personService.getAllPersons();
      setPersons(data);
    }
    if (persons.length === 0) {
      fetchPeople();
    }
  }, [persons.length]);

  const people = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {showToast && <Toast showToast={showToast} toastMessage={toastMessage} />}
      <h2>Phonebook</h2>
      <hr />
      <Filter setFilter={setFilter} />
      <hr />
      <PersonForm persons={persons} setPersons={setPersons} />
      <hr />
      <h2>Numbers</h2>
      {people.length === 0 ? (
        <p>No results in the phonebook</p>
      ) : (
        people.map((person) => (
          <Person
            key={person.id}
            person={person}
            persons={persons}
            setPersons={setPersons}
          />
        ))
      )}
    </div>
  );
};

export default App;
