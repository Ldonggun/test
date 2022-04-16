import React from 'react';
import style from './post.module.css';
//components
import { Comments } from '../index';
const Post = ({ data }) => {
  const comment = data?.children;
  return (
    <>
      {data && (
        <>
          <main className={style.main}>
            <a
              className={style.title}
              href={data.url}
              target='_blank'
              rel='noreferrer'
            >
              {data.title}
            </a>
            <p className={style.text}>
              author : <span className={style.author}>{data.author}</span>
            </p>
            <p className={style.text}>
              point : <span className={style.point}>{data.points}</span>
            </p>
          </main>
          <section>
            <Comments data={comment} />
          </section>
        </>
      )}
    </>
  );
};

export default Post;
