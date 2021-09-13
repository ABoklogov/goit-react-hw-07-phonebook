import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../redux/contacts/contacts-action';
import s from './ContactForm.module.css';
// import * as api from '../../services/contacts-api';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  // const contact = useSelector();

  const handleNameChenge = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(action.addContact(name, number));
    // api.postContacts(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <p className={s.text}>Name</p>
      <input
        className={s.input}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChenge}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <p className={s.text}>Number</p>
      <input
        className={s.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleNameChenge}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
