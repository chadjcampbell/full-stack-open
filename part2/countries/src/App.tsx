import { useEffect, useState } from "react";
import Filter from "./component/Filter";
import axios from "axios";
import CountryInfo from "./component/CountryInfo";

export type CountryType = {
  name: { common: string };
  capital: string[];
  area: number;
  languages: { [key: string]: string };
  flags: { alt: string; png: string };
  latlng: number[];
};

function App() {
  const [filter, setFilter] = useState<string>("");
  const [allCountries, setAllCountries] = useState<CountryType[]>([]);

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
  });

  const filteredCountries = allCountries.filter((c) =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const selectCountry = (name: string) => {
    setFilter(name);
  };

  const renderCountryInfo = () => {
    switch (true) {
      case filteredCountries.length === 0 && allCountries.length === 0:
        return <p>Loading...</p>;
      case filteredCountries.length === 0 && allCountries.length > 0:
        return <p>No countries found</p>;
      case filteredCountries.length === 1:
        return <CountryInfo country={filteredCountries[0]} />;
      case filteredCountries.length > 10:
        return <p>Too many matches, specify another filter</p>;
      case filteredCountries.length <= 10:
        return filteredCountries.map((fc) => (
          <p key={fc.name.common}>
            {fc.name.common}{" "}
            <button onClick={() => selectCountry(fc.name.common)}>show</button>
          </p>
        ));
      default:
        return <p>Something went wrong</p>;
    }
  };

  return (
    <main>
      <h1>Countries</h1>
      <Filter filter={filter} setFilter={setFilter} />
      {renderCountryInfo()}
    </main>
  );
}

export default App;
