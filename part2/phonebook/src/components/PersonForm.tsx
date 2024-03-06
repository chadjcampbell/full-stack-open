const PersonForm = () => {
  return (
    <form>
      <h3>Add to phonebook</h3>
      <div>
        <label htmlFor="name">Name:</label>

        <input autoComplete="none" id="name" type="text" />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input autoComplete="none" id="number" type="text" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
