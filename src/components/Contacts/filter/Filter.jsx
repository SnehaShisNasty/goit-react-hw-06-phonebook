import React from 'react';
import css from './Filter.module.css';
import { setFilter } from '../../../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFitler = ({ target }) => dispatch(setFilter(target.value));
  return (
    <form className={css.form}>
      <label className={css.filterLabel}>
        Filter
        <input
          type="text"
          onChange={changeFitler}
          className={css.filterInput}
        />
      </label>
    </form>
  );
};
