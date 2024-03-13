import { useEffect, useState } from "react";
import Filter from "./component/Filter";
import axios from "axios";

function App() {
  const [filter, setFilter] = useState<string>("");
  const [allCountries, setAllCountries] = useState([]);

  const filteredCountries = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    const getAllCountries = async () => {
      const res = await axios.get(
        "https://studies.cs.helsinki.fi/restcountries/api/all"
      );
      setAllCountries(res.data);
    };
    if (allCountries.length === 0) {
      getAllCountries();
    }
  }, []);
  console.log(allCountries);

  return (
    <main>
      <h1>Countries</h1>
      <Filter setFilter={setFilter} />
      {allCountries.length === 0 && <p>Loading...</p>}
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        filteredCountries.map((fc) => <p>{fc.name.common}</p>)
      )}
    </main>
  );
}

export default App;
