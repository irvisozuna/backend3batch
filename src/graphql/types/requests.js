import * as GRAPHQL from 'graphql';
import { MenuInputType, MenuType } from './menus';
import Menu from '../../schemas/menus';
import User from '../../schemas/users';
import { UserType } from './users';

export const RequestType = new GRAPHQL.GraphQLObjectType({
    name: "Request",
    description : "Types of request",
    fields : () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        company: {
            type: MenuType,
            resolve(menu){
                const {menus} = menu
                return Menu.findById(menus).exec()
            }
        },
        user: {
            type: UserType,
            resolve(user){
                const {users} = user
                return User.findById(users).exec()
            }
        }
    })
})

export const RequestInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRequest',
    description: "Add Request",
    fields : () => ({
        company: {
            type: GRAPHQL.GraphQLString
        },
        user: {
            type: GRAPHQL.GraphQLString
        }
    })
})