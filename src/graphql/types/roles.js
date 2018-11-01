import * as GRAPHQL from 'graphql';


export const RoleType = new GRAPHQL.GraphQLObjectType({
    name: "Roles",
    description : "Types of Roles",
    fields: () => ({
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

export const RoleInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRoles',
    description: "Add Role",
    fields : () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})