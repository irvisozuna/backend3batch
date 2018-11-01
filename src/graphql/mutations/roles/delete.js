import Rol from '../../../schemas/roles';
import { RoleType } from '../../types/roles';
import * as graphql from 'graphql';

export default {
    type: RoleType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedRol = Rol.findByIdAndRemove(params.id).exec()
        if(!deletedRol) throw Error("Error on delete")
        return deletedRol
    }
}