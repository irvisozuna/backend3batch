import UserRol from '../../../schemas/userRol';
import { UserRolType } from '../../types/userRol';
import * as graphql from 'graphql';

export default {
    type: UserRolType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedUserRol = UserRol.findByIdAndRemove(params.id).exec()
        if(!deletedUserRol) throw Error("Error on delete")
        return deletedUserRol
    }
}