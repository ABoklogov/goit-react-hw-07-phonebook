import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import s from './ContactList.module.css';
import ContactItem from './ContactItem';

const ContactList = () => {
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ul className={s.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
