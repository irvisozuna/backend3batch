import * as GRAPHQL from 'graphql';
import { UserType } from "./users";
import { RoleType } from "./roles";

export const UserRoleType = new GRAPHQL.GraphQLObjectType({
    name: "UserRoles",
    description : "Roles of Users",
    fields : () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        rol: {
            type: RoleType,
            resolve(userRol){
                const {rol} = userRol
                return Rol.findById(rol).exec()
            }
        },
        user: {
            type: UserType,
            resolve(userRol){
                const user = userRol
                return User.findById(user).exec()
            }
        }
    })
})

export const UserRoleInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addUserRoles',
    description: "Add User Role",
    fields : () => ({
        rol: {
            type: GRAPHQL.GraphQLString
        },
        user: {
            type: GRAPHQL.GraphQLString
        }
    })
})