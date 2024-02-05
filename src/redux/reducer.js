import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constans';

const initialStore = {
  contacts: [],
  filter: '',
};
export const reducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return {
        ...state,
        contacts: [...contacts, payload],
      };
    case DELETE_CONTACT:
      const newContact = state.contacts.filter(item => item.id !== payload);
      return {
        ...state,

        contacts: newContact,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};
