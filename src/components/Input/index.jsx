import React, { useState, useCallback } from 'react';
import style from './input.module.css';
import Data from '../../shared/data';
import debounce from '../../shared/debounce';

const Input = props => {
  const data = new Data();
  const [value, setValue] = useState('');
  const [relatedList, setRelatedList] = useState([]);

  console.log(relatedList);

  const printValue = useCallback(
    debounce(value => data.getTitle(value, setRelatedList), 300),
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
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type='text'
        value={value}
        onChange={handleChange}
        className={style.input}
      />
      <button type='submit'>버튼</button>
    </form>
  );
};

export default Input;
