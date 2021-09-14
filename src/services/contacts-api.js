import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function postContacts(contact) {
  await axios.post('/contacts', contact);
}

export async function deleteContacts(id) {
  await axios.delete(`/contacts/${id}`);
}
