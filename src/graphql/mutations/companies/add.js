import Company from '../../../schemas/companies';
import { CompanyType ,CompanyInputType } from '../../types/companies';
import * as graphql from 'graphql';

export default {

    type:CompanyType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(CompanyInputType)
        }
    },
    resolve(root,params){
        const company = new Company(params.data)
        const newCompany = company.save();
        if(!newCompany) throw new Error("Error at creating company")
        return newCompany
    }
}