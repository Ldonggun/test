import React from 'react';
import style from './relatedlist.module.css';

const RelatedList = ({ list }) => {
  // console.log(list);
  const handleClick = e => {
    const selected = e.target.innerText;
    const data = list.filter(item => item.title === selected);
    console.log(data);
    console.log(e.target.innerText);
  };
  return (
    <ul className={style.container}>
      {list
        .filter(item => item.title !== null)
        .map(item => {
          return (
            <li
              className={style.text}
              key={item.objectID}
              onClick={handleClick}
            >
              {item.title}
            </li>
          );
        })}
    </ul>
  );
};

export default RelatedList;
