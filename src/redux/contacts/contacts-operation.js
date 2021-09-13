import * as action from './contacts-action';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(action.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(action.fetchContactsSuccess(contacts));
  } catch (error) {
    console.log(error);
    dispatch(action.fetchContactsError(error));
  }
};
