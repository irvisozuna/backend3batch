import * as GRAPHQL from 'graphql';

import UserRol from '../../../schemas/userRol';

import { UserRoleType } from '../../types/userRol';

const querySingleUserRol = {

    type: UserRoleType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const userRol = UserRol.findById(params.id).exec()
        return userRol
    }
}

export default querySingleUserRol;