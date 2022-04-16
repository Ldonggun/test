import React, { useEffect, useState } from 'react';
import style from './result.module.css';
import { useParams } from 'react-router-dom';
import Data from '../../shared/data';
//components
import { Post } from '../../components/index';
const Result = props => {
  const apiData = new Data();
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    apiData.getComment(id, setData);
  }, []);

  return (
    <div className={style.container}>
      <Post data={data} />
    </div>
  );
};

export default Result;
