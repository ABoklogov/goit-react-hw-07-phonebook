import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-action';

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],

  [action.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),

  [action.setContacts]: (_, { payload }) => [...payload],

  [action.fetchContactsSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [action.chengeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [action.fetchContactsRequest]: () => true,
  [action.fetchContactsSuccess]: () => false,
  [action.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [action.fetchContactsError]: (_, { payload }) => payload,
  [action.fetchContactsRequest]: () => null,
});

const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
});

export default contactsReducer;
