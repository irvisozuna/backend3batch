import * as GRAPHQL from 'graphql';

import Company from '../../../schemas/companies';

import { CompanyType } from '../../types/companies';

const querySingleCompany = {

    type: CompanyType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const company = Company.findById(params.id).exec()
        return company
    }
}

export default querySingleCompany;