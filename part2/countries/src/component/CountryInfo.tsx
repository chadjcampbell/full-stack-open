import { CountryType } from "../App";

type CountryInfoProps = {
  country: CountryType;
};

const CountryInfo = ({ country }: CountryInfoProps) => {
  return (
    <section>
      <h2>{country.name.common}</h2>
    </section>
  );
};

export default CountryInfo;
