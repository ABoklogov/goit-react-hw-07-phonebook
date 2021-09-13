import * as action from './contacts-action';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(action.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(action.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(action.fetchContactsError(error));
  }
};

export const postContact = contact => async dispatch => {
  dispatch(action.fetchContactsRequest());

  try {
    await contactsAPI.postContacts(contact);
    // dispatch(action.fetchContactsSuccess(contact));
  } catch (error) {
    // dispatch(action.fetchContactsError(error));
  }
};
