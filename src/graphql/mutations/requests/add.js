import Request from '../../../schemas/requests';
import { RequestType ,RequestInputType } from '../../types/requests';
import * as graphql from 'graphql';

export default {

    type:RequestType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(RequestInputType)
        }
    },
    resolve(root,params){
        const request = new Request(params.data)
        const newRequest = request.save();
        if(!newRequest) throw new Error("Error at creating balance")
        return newRequest
    }
}