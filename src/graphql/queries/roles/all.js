import * as GRAPHQL from 'graphql';

import Rol from '../../../schemas/roles';
import { RoleType } from '../../types/roles';



const queryAllRoles = {
    type : new GRAPHQL.GraphQLList(RoleType),
    resolve(){
        const roles = Rol.find().exec()
        if(!roles) throw new Error("Error at fetching roles");
        return roles
    }
}

export default queryAllRoles;

