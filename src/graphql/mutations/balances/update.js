import Balance from '../../../schemas/balance';
import { BalanceType, BalanceInputType } from '../../types/balance';
import * as graphql from 'graphql';

export default{
    type: BalanceType,
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
        return Balance.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((balance)=> Balance.findById(balance.id).exec())
                        .catch((err) => new Error('Couldnt update Genre data', err))
    }
}



