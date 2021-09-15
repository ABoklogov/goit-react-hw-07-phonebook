import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperation } from 'redux/contacts';
import s from './App.module.css';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

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
