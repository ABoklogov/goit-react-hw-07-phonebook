import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-action';

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => {
    const checkingContacts = el =>
      el.name.toLowerCase() === payload.name.toLowerCase();
    if (state.some(checkingContacts)) {
      alert(`${payload.name} is alreaby in contacts`);
      return [...state];
    }
    return [...state, payload];
  },

  [action.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),

  [action.setContacts]: (_, { payload }) => [...payload],
});

const filter = createReducer('', {
  [action.chengeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  filter,
  items,
});

export default contactsReducer;
