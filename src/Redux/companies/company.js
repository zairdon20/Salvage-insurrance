import fetchCompaniesAPI from '../../API/companiesAPI';
const FETCH_COMPANIES = 'companies/FETCH_Companies';

const getCompanies = (companies) => ({
    type: FETCH_COMPANIES,
    payload: companies,
  });
  

export const fetchCompanies = () => async (dispatch) => {
  try {
    const campData = await fetchCompaniesAPI();

    dispatch(getCompanies(campData));
  } catch (error) {
    throw new Error(error.message);
  }
}

const companiesReducer = (state = [], action ) => {
  switch(action.type) {
    case FETCH_COMPANIES:
      return [...state, action.payload];
    default:
      return state;
  }

}

export default companiesReducer;

