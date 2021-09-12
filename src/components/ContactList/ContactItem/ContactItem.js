import { useDispatch } from 'react-redux';
import * as action from '../../../redux/contacts/contacts-action';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p className={s.contactName}>{name}:</p>
      <p className={s.contactNumber}>{number}</p>
      <button
        className={s.contactBtn}
        onClick={() => dispatch(action.deleteContact(id))}
      >
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
