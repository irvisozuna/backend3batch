import Rol from '../../../schemas/roles';
import { RolType, RolInputType } from '../../types/roles';
import * as graphql from 'graphql';

export default{
    type: RolType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(RolInputType)
        }
    },
    resolve(root,params){
        return Rol.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((rol)=> Rol.findById(rol.id).exec())
                        .catch((err) => new Error('Couldnt update Genre data', err))
    }
}


