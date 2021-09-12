import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import { getContacts } from '../../redux/contacts/contacts-selector';
import s from './App.module.css';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsRepositiry = JSON.parse(localStorage.getItem('contacts'));
    if (contactsRepositiry) {
      dispatch(action.setContacts(contactsRepositiry));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
