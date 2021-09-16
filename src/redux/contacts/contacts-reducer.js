import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-action';
import { fetchContacts } from './contacts-operation';

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],

  [action.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),

  [action.setContacts]: (_, { payload }) => [...payload],

  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [action.chengeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: () => 'error, lost connection with the server!',
  [fetchContacts.pending]: () => null,
});

const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
});

export default contactsReducer;
