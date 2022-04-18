import React, { useEffect, useState } from 'react';
import style from './input.module.css';
import debounceOnChange from '../../shared/debounce';
import { useNavigate } from 'react-router-dom';
const Input = ({ setRelatedList, relatedList, setIndex, index }) => {
  const navigate = useNavigate();
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
    const post = relatedList.filter(item => item.title === value);
    const id = post[0].objectID;
    if (id) navigate(`/result/${id}`);
  };

  const handleKeyEvent = e => {
    if (e.key === 'ArrowDown') {
      index === 9 ? setIndex(0) : setIndex(index + 1);
    }
    if (e.key === 'ArrowUp') {
      index === 0 ? setIndex(9) : setIndex(index - 1);
    }
  };

  useEffect(() => {
    setValue(relatedList[index]?.title);
  }, [index]);

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type='search'
          value={value || ''}
          onChange={handleChange}
          onKeyDown={handleKeyEvent}
          className={style.input}
        />
      </form>
    </>
  );
};

export default Input;
