import UserRol from '../../../schemas/userRol';
import { UserRolType ,UserRolInputType } from '../../types/userRol';
import * as graphql from 'graphql';

export default {

    type:UserRolType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(UserRolInputType)
        }
    },
    resolve(root,params){
        const userRol = new UserRol(params.data)
        const newUserRol = userRol.save();
        if(!newUserRol) throw new Error("Error at creating rol")
        return newUserRol
    }
}