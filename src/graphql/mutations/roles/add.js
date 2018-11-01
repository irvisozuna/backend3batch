import Rol from '../../../schemas/roles';
import { RoleType ,RoleInputType } from '../../types/roles';
import * as graphql from 'graphql';

export default {

    type:RoleType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(RoleInputType)
        }
    },
    resolve(root,params){
        const rol = new Rol(params.data)
        const newRol = rol.save();
        if(!newRol) throw new Error("Error at creating rol")
        return newRol
    }
}