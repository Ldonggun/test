import React, { useEffect, useRef } from 'react';
import style from './relatedlist.module.css';
import { useNavigate } from 'react-router-dom';
const RelatedList = ({ relatedList, setListIndex, index }) => {
  const navigate = useNavigate();
  const listRef = useRef();
  const handleClick = e => {
    const selected = e.target.innerText;
    const post = relatedList.filter(item => item.title === selected);
    const id = post[0].objectID;
    if (id) navigate(`/result/${id}`);
  };

  useEffect(() => {
    if (relatedList) setListIndex(listRef.current?.children);
  }, [relatedList, setListIndex]);

  return (
    <ul className={style.container} ref={listRef}>
      {relatedList &&
        relatedList
          .slice(0, 10)
          .filter(item => item.title !== null)
          .map((item, idx) => {
            return (
              <li
                className={index === idx ? style.text2 : style.text}
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
