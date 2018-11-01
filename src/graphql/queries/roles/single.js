import * as GRAPHQL from 'graphql';

import Rol from '../../../schemas/roles';

import { RoleType } from '../../types/roles';

const querySingleRol = {

    type: RoleType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const rol = Rol.findById(params.id).exec()
        return rol
    }
}

export default querySingleRol;