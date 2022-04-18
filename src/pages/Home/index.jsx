import React, { useState } from 'react';
import style from './home.module.css';
//components
import { Input, RelatedList } from '../../components/index';

const Home = props => {
  const [relatedList, setRelatedList] = useState([]);
  const [listIndex, setListIndex] = useState();
  const [index, setIndex] = useState(-1);

  return (
    <div className={style.container}>
      <Input
        setRelatedList={setRelatedList}
        relatedList={relatedList}
        setIndex={setIndex}
        index={index}
      />
      <RelatedList
        relatedList={relatedList}
        setListIndex={setListIndex}
        index={index}
      />
    </div>
  );
};

export default Home;
