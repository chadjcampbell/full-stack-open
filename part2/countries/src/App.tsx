import { useEffect, useState } from "react";
import Filter from "./component/Filter";
import axios from "axios";

function App() {
  const [filter, setFilter] = useState<string>("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
  }, []);
  return (
    <main>
      <h1>Countries</h1>
      <Filter setFilter={setFilter} />
      {/* <List/> or <CountryData/> */}
    </main>
  );
}

export default App;
