import React, { useEffect, useState } from 'react';
import style from './input.module.css';
import debounceOnChange from '../../shared/debounce';

const Input = ({ setRelatedList }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setValue(e.target.value);
    if (value.length > 1) debounceOnChange(e.target.value, setRelatedList);
    if (value === '') {
      setTimeout(() => {
        setRelatedList('');
      }, 500);
    }
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
      </form>
    </>
  );
};

export default Input;
