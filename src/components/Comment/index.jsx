import React from 'react';
import style from './comment.module.css';
const Comment = ({ data }) => {
  const time = data.created_at.slice(0, 10);

  return (
    <li className={style.comment}>
      <span>
        {data.author}&nbsp;&nbsp;{time}
      </span>
      <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
    </li>
  );
};

export default Comment;
