import axios from "axios";
import { PersonType } from "../components/Person";
const baseUrl = "http://localhost:3001/persons";

const getAllPersons = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const createPerson = async (newPerson: PersonType) => {
  const request = axios.post(baseUrl, newPerson);
  const response = await request;
  return response.data;
};

const updatePerson = async (id: string, updatedPerson: PersonType) => {
  try {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
    const response = await request;
    return response.data;
  } catch (err: unknown) {
    throw new Error(err as string);
  }
};

const deletePerson = async (id: string) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

export default { getAllPersons, createPerson, updatePerson, deletePerson };
