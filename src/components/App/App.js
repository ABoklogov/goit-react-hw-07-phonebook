import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperation, contactsSelectors } from 'redux/contacts';
import s from './App.module.css';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {loading && <h1>Loading...</h1>}
      {!loading && <ContactList />}
      {error && alert(error)}
    </div>
  );
};

export default App;
