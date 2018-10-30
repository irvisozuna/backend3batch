import Balance from '../../../schemas/balance';
import { BalanceType } from '../../types/balance';
import * as graphql from 'graphql';

export default {
    type: BalanceType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedBalance = Balance.findByIdAndRemove(params.id).exec()
        if(!deletedBalance) throw Error("Error on delete")
        return deletedBalance
    }
}