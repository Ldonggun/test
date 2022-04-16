import React, { useState } from 'react';
import style from './home.module.css';
//components
import { Input, RelatedList } from '../../components/index';
import Data from '../../shared/data';
const Home = props => {
  const [relatedList, setRelatedList] = useState([]);
  console.log(relatedList);
  return (
    <div className={style.container}>
      <Input setRelatedList={setRelatedList} />
      <RelatedList relatedList={relatedList} />
    </div>
  );
};

export default Home;
