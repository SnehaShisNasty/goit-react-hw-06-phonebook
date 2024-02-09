import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import { getFiltered } from '../../../redux/selctors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-slice';

const INITIAL_STATE = {
  name: '',
  number: '',
};
const Form = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const contacts = useSelector(getFiltered);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddContact({ ...state });
    reset();
  };

  const isDublicate = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.number.toLowerCase();
      return (
        normalizedCurrentName === normalizedName ||
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

  const reset = () => {
    setState({ name: '', number: '' });
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameInputId} className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          id={nameInputId}
          required
        />
      </label>
      <label htmlFor={numberInputId} className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={state.number}
          onChange={handleChange}
          id={numberInputId}
          required
        />
      </label>

      <button type="submit" className={css.submit}>
        Add Contact
      </button>
    </form>
  );
};

export default Form;
