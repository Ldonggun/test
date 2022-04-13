import React, { useState, useCallback } from 'react';
import style from './input.module.css';
import Data from '../../shared/data';
import debounce from '../../shared/debounce';
import { RelatedList } from '../index';

const Input = props => {
  const data = new Data();
  const [value, setValue] = useState('');
  const [relatedList, setRelatedList] = useState([]);

  const printValue = useCallback(
    debounce(value => data.getTitle(value, setRelatedList), 100),
    [],
  );
  const handleChange = e => {
    setValue(e.target.value);
    printValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type='search'
          value={value}
          onChange={handleChange}
          className={style.input}
        />
        {/* <button type='submit'>버튼</button> */}
      </form>
      <RelatedList list={relatedList} />
    </>
  );
};

export default Input;
