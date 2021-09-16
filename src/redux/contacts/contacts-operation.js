import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/requestStatus',
  async () => await contactsAPI.fetchContacts(),
);

export const postContact = createAsyncThunk(
  'contacts/requestStatus',
  async contact => await contactsAPI.postContacts(contact),
);

export const deletContacts = createAsyncThunk(
  'contacts/requestStatus',
  async id => await contactsAPI.deleteContacts(id),
);
