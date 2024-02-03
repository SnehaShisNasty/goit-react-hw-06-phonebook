import React, { useState } from 'react';
import Form from './form/Form';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { useSelector, useDispatch } from 'react-redux';

import { addContact, deleteContact } from '../../redux/action';
import css from './Contact.module.css';

export const Contact = () => {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

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

  // const changeFitler = ({ target }) => setFilter(target.value);

  // const getVisibleContact = () => {
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLowerCase();

  //   const filteredBooks = contacts.filter(({ name, number }) => {
  //     const normalizedTitle = name.toLowerCase();
  //     const normalizedAuthor = number.toLowerCase();

  //     return (
  //       normalizedAuthor.includes(normalizedFilter) ||
  //       normalizedTitle.includes(normalizedFilter)
  //     );
  //   });

  //   return filteredBooks;
  // };

  // const data = getVisibleContact();
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={onAddContact}></Form>

      <Filter value={filter} onChange={() => {}}></Filter>
      <h2 className={css.titleContacts}> Contacts</h2>
      <ContactList
        data={contacts}
        onDeleteContact={onDeleteContact}
      ></ContactList>
    </section>
  );
};
