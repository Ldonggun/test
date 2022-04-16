import React from 'react';
import style from './comments.module.css';
//compoents
import { Comment } from '../index';
const Comments = ({ data }) => {
  return (
    <ul className={style.container}>
      {data &&
        data.map(item => {
          return <Comment data={item} key={item.id} />;
        })}
    </ul>
  );
};

export default Comments;
