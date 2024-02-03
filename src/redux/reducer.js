import { ADD_CONTACT, DELETE_CONTACT } from './constans';

const initialStore = {
  contacts: [],
};
export const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return {
        contacts: [...contacts, payload],
      };
    case DELETE_CONTACT:
      const newContact = state.contacts.filter(item => item.id !== payload);
      return {
        contacts: newContact,
      };
    default:
      return state;
  }
};
