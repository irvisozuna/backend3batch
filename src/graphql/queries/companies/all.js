import * as GRAPHQL from 'graphql';

import Company from '../../../schemas/companies';
import { CompanyType } from '../../types/companies';


const queryAllCompanies = {
    type : new GRAPHQL.GraphQLList(CompanyType),
    resolve(){
        const companies = Company.find().exec()
        if(!companies) throw new Error("Error at fetching company");
        return companies
    }
}

export default queryAllCompanies;