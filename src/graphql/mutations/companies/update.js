import Company from '../../../schemas/companies';
import { CompanyType ,CompanyInputType } from '../../types/companies';
import * as graphql from 'graphql';

export default{
    type: CompanyType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(BalanceInputType)
        }
    },
    resolve(root,params){
        return Company.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((company)=> Company.findById(company.id).exec())
                        .catch((err) => new Error('Couldnt update company data', err))
    }
}



