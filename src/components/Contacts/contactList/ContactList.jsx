import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-slice';
import { getFiltered } from '../../../redux/selctors';
export const ContactList = () => {
  const contacts = useSelector(getFiltered);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} className={css.delete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
