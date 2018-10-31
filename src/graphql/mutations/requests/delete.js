import Request from '../../../schemas/requests';
import { RequestType  } from '../../types/requests';
import * as graphql from 'graphql';

export default {
    type: RequestType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedRequest = Request.findByIdAndRemove(params.id).exec()
        if(!deletedRequest) throw Error("Error on delete")
        return deletedRequest
    }
}