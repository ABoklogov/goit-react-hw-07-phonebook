import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/Add', newContact => ({
  payload: newContact,
}));

export const deleteContact = createAction('contact/Delete');

export const setContacts = createAction('contacts/Set');

export const chengeFilter = createAction('contacts/Filter', e => ({
  payload: e.target.value,
}));
