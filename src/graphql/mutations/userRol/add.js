import UserRol from '../../../schemas/userRol';
import { UserRoleType ,UserRoleInputType } from '../../types/userRol';
import * as graphql from 'graphql';

export default {

    type:UserRoleType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(UserRoleInputType)
        }
    },
    resolve(root,params){
        const userRol = new UserRol(params.data)
        const newUserRol = userRol.save();
        if(!newUserRol) throw new Error("Error at creating rol")
        return newUserRol
    }
}