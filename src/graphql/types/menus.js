import * as GRAPHQL from 'graphql';
import { CompanyType } from './companies';
import Company from '../../schemas/companies';

export const MenuType = new GRAPHQL.GraphQLObjectType({
    name: "Menu",
    description : "Types of menus",
    fields : () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        image: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        company: {
            type: CompanyType,
            resolve(data){
                return Company.findById(data.company).exec()
            }
        },
        date: {
            type: GRAPHQL.GraphQLString
        },
        price: {
            type: GRAPHQL.GraphQLFloat
        }
    })
})

export const MenuInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addMenu',
    description: "Add Menu",
    fields : () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        image: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        },
        company: {
            type: GRAPHQL.GraphQLString
        },
        date: {
            type: GRAPHQL.GraphQLString
        },
        price: {
            type: GRAPHQL.GraphQLFloat
        }
    })
})