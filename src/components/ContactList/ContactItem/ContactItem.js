import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../../../redux/contacts/contacts-action';
import * as contactsOperation from '../../../redux/contacts/contacts-operation';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(action.deleteContact(id));
    dispatch(contactsOperation.deletContacts(id));
  };

  return (
    <>
      <p className={s.contactName}>{name}:</p>
      <p className={s.contactNumber}>{number}</p>
      <button className={s.contactBtn} onClick={() => deleteContact(id)}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
