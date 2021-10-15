import axios from 'axios';

// get all contacts from db
const getContacts = () => {
  const request = axios.get('http://localhost:3001/persons');

  return request.then(response => response.data);
};

// add to db
const addContact = (newPerson) => {
  const request = axios.post('http://localhost:3001/persons', newPerson);

  return request.then(res => res.data);
};

// delete from db
const deleteContact = (id) => {
  // const request = axios.delete(`http://localhost:3001/persons/${id}`);
  // return request.then(() => console.log('data deleted'));

  // delete from db and return 
  // must 'return' to cont 'then' chain in deletePerson func
  return axios.delete(`http://localhost:3001/persons/${id}`);
}

// update contact's phone number in db
const updatePhone = (contact, updated) => {
  return axios.put(`http://localhost:3001/persons/${contact.id}`, updated)
}

export { getContacts, addContact, deleteContact, updatePhone };