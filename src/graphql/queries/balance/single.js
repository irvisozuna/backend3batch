import * as GRAPHQL from 'graphql';

import Balance from '../../../schemas/balance';

import { BalanceType } from '../../types/balance';

const querySingleBalance = {

    type: BalanceType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const balance = Balance.findById(params.id).exec()
        return balance
    }
}

export default querySingleBalance;