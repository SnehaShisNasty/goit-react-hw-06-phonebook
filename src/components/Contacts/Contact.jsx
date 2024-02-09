import React from 'react';
import Form from './form/Form';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

import css from './Contact.module.css';
export const Contact = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <Form></Form>

      <Filter></Filter>
      <h2 className={css.titleContacts}> Contacts</h2>
      <ContactList></ContactList>
    </section>
  );
};
