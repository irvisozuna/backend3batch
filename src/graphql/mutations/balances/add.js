import Balance from '../../../schemas/balance';
import { BalanceType ,BalanceInputType } from '../../types/balance';
import * as graphql from 'graphql';

export default {

    type:BalanceType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(BalanceInputType)
        }
    },
    resolve(root,params){
        const balance = new Balance(params.data)
        const newBalance = balance.save();
        if(!newBalance) throw new Error("Error at creating balance")
        return newBalance
    }
}