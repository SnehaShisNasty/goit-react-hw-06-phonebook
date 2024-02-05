import React from 'react';
import Form from './form/Form';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFiltered } from '../../redux/selctors';

import css from './Contact.module.css';
export const Contact = () => {
  const contacts = useSelector(getFiltered);

  const dispatch = useDispatch();

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();
      return (
        normalizedCurrentName === normalizedName &&
        normalizedCurrentNumber === normalizedNumber
      );
    });

    return Boolean(dublicate);
  };

  const onAddContact = data => {
    if (isDublicate(data)) {
      return alert(`Book with ${data.number} and ${data.name} already in list`);
    }

    dispatch(addContact(data));
  };
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const changeFitler = ({ target }) => dispatch(setFilter(target.value));
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={onAddContact}></Form>

      <Filter onChange={changeFitler}></Filter>
      <h2 className={css.titleContacts}> Contacts</h2>
      <ContactList
        data={contacts}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </section>
  );
};
