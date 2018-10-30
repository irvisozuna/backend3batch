import * as GRAPHQL from 'graphql';

import Balance from '../../../schemas/balance';
import { BalanceType } from '../../types/balance';


const queryAllBalances = {
    type : new GRAPHQL.GraphQLList(BalanceType),
    resolve(){
        const balances = Balance.find().exec()
        if(!balances) throw new Error("Error at fetching balances");
        return balances
    }
}

export default queryAllBalances;