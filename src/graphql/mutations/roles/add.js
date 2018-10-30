import Rol from '../../../schemas/roles';
import { RolType ,RolInputType } from '../../types/roles';
import * as graphql from 'graphql';

export default {

    type:RolType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(RolInputType)
        }
    },
    resolve(root,params){
        const rol = new Rol(params.data)
        const newRol = rol.save();
        if(!newRol) throw new Error("Error at creating rol")
        return newRol
    }
}