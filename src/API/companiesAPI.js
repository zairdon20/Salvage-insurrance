import axios from 'axios';

const fetchCompaniesAPI = async () => {
  const res = await axios.get('https://gar-test.hobbiton.tech/insurance-companies?PageNumber=1&PageSize=2');
  const { data } = res;
  return data;
};
export default fetchCompaniesAPI;