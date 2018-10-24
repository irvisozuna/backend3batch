import * as GRAPHQL from 'graphql';
import Movie from '../../../schemas/movies';
import { MovieType, RankMovieType } from '../../types/movies';

export default {
    type: MovieType,
    args:{
        id:{
            name:'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        data:{
            name:"data",
            type: GRAPHQL.GraphQLNonNull(RankMovieType)
        }
    },resolve(root,params){
        const {id,data} = params
        return Movie.findByIdAndUpdate(id,{$push:{rank:data.rank}})
            .then((movie)=>{
                return Movie.findById(movie.id).exec()
            })
    }
}