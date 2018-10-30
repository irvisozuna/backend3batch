import UserRol from '../../../schemas/userRol';
import { UserRolType, UserRolInputType } from '../../types/userRol';
import * as graphql from 'graphql';

export default{
    type: UserRolType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(UserRolInputType)
        }
    },
    resolve(root,params){
        return UserRol.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((userRol)=> UserRol.findById(userRol.id).exec())
                        .catch((err) => new Error('Couldnt update Genre data', err))
    }
}



