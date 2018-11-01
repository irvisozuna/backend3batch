import * as GRAPHQL from 'graphql';

import Request from '../../../schemas/requests';
import { RequestType } from '../../types/requests';


const queryAllRequest = {
    type : new GRAPHQL.GraphQLList(RequestType),
    resolve(){
        const requests = Request.find().exec()
        if(!requests) throw new Error("Error at fetching requests");
        return requests
    }
}

export default queryAllRequest;