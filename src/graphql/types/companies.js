import * as GRAPHQL from 'graphql';

export const CompanyType = new GRAPHQL.GraphQLObjectType({
    name: "Companies",
    description : "Types of companies",
    fields : () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})

export const CompanyInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addCompany',
    description: "Add Company",
    fields : () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})