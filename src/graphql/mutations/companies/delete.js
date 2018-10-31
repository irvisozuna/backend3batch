import Company from '../../../schemas/companies';
import { CompanyType  } from '../../types/companies';
import * as graphql from 'graphql';

export default {
    type: CompanyType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedCompany = Company.findByIdAndRemove(params.id).exec()
        if(!deletedCompany) throw Error("Error on delete")
        return deletedCompany
    }
}