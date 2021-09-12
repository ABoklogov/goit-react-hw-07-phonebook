import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/Add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contact/Delete');

export const setContacts = createAction('contacts/Set');

export const chengeFilter = createAction('contacts/Filter', e => ({
  payload: e.target.value,
}));
