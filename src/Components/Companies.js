import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../Redux/companies/company';

const Companies = () => {
    const companies = useSelector((state) => state.companiesReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompanies());
    }, []);

    return (
        <>
        {companies.map((company) => (
            <div key={company.id}>{company.name}</div>
        ))}
        </>
    )

}

export default Companies;