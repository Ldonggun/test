import { debounce } from 'lodash';
import Data from './data';
const data = new Data();
const debounceOnChange = debounce((value, setRelatedList) => {
  data.getTitle(value, setRelatedList);
}, 200);

export default debounceOnChange;
