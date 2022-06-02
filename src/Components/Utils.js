import axios from 'axios';

const fetchDragonsAPI = async () => {
  const res = await axios.get('https://gar-test.hobbiton.tech/insurance-companies?PageNumber=1&PageSize=1');
  return res;
};

export default fetchDragonsAPI;