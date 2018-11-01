import * as GRAPHQL from 'graphql';

import UserRol from '../../../schemas/userRol';
import { UserRoleType } from '../../types/userRol';


const queryAllUserRoles = {
    type : new GRAPHQL.GraphQLList(UserRoleType),
    resolve(){
        const {userRoles} = UserRol.find().exec()
        if(!userRoles) throw new Error("Error at fetching user roles");
        return userRoles
    }
}

export default queryAllUserRoles;