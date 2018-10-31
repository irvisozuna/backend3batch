import Request from '../../../schemas/requests';
import { RequestType ,RequestInputType } from '../../types/requests';
import * as graphql from 'graphql';

export default{
    type: RequestType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(RequestInputType)
        }
    },
    resolve(root,params){
        return Request.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((request)=> Request.findById(request.id).exec())
                        .catch((err) => new Error('Couldnt update Request data', err))
    }
}



