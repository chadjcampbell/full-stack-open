import axios from "axios";
import { PersonType } from "../components/Person";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

const getAllPersons = async () => {
  const request = axios.get(baseUrl + "api/persons");
  const response = await request;
  return response.data;
};

const createPerson = async (newPerson: PersonType) => {
  const request = axios.post(baseUrl + "api/persons", newPerson);
  const response = await request;
  return response.data;
};

const updatePerson = async (id: string, updatedPerson: PersonType) => {
  try {
    const request = axios.put(
      `${baseUrl + "api/persons"}/${id}`,
      updatedPerson
    );
    const response = await request;
    return response.data;
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};

const deletePerson = async (id: string) => {
  const request = axios.delete(`${baseUrl + "api/persons"}/${id}`);
  const response = await request;
  return response.data;
};

export default { getAllPersons, createPerson, updatePerson, deletePerson };
