import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import * as action from '../../redux/contacts/contacts-action';
import * as contactsOperation from '../../redux/contacts/contacts-operation';
// import * as contactsAPI from '../../services/contacts-api';
import s from './App.module.css';
import Filter from '../Filter';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

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
