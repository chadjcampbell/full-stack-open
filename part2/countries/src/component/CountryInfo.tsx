import { CountryType } from "../App";
import Weather from "./Weather";

type CountryInfoProps = {
  country: CountryType;
};

const CountryInfo = ({ country }: CountryInfoProps) => {
  return (
    <>
      <section>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </section>
      <Weather country={country} />
    </>
  );
};

export default CountryInfo;
