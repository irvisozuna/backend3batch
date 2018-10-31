import * as GRAPHQL from 'graphql';

import Request from '../../../schemas/requests';

import { RequestType } from '../../types/requests';

const querySingleRequest = {

    type: RequestType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const rating = Rating.findById(params.id).exec()
        return rating
    }
}

export default querySingleRequest;