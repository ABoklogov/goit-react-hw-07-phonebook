import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contacts/contacts-selector';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <ul className={s.contactList}>
      {getVisibleContacts().map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
