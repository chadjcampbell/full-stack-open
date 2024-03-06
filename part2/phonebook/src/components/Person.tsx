export type PersonType = {
  name: string;
  number: string;
  id: number;
};

type PersonProps = {
  person: PersonType;
};

const Person = ({ person }: PersonProps) => {
  return (
    <div>
      <p>
        {person.name}: {person.number}
      </p>
    </div>
  );
};

export default Person;
