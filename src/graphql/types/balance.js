import * as GRAPHQL from 'graphql';
import { UserType } from "./users";
import { MenuType } from "./menus";

export const BalanceType = new GRAPHQL.GraphQLObjectType({
    name: "Balance",
    description : "Types of Balance",
    fields : () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        due: {
            type: GRAPHQL.GraphQLFloat
        },
        paid: {
            type: GRAPHQL.GraphQLFloat
        },
        user: {
            type: UserType,
            resolve(balance){
                const {user} = balance
                return User.findById(user).exec()
            }
        },
        menu: {
            type: MenuType,
            resolve(balance){
                const {menu} = balance
                return Menu.findById(menu).exec()
            }
        },
    })
})

export const BalanceInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addBalance',
    description: "Add Balance",
    fields : () => ({
        due: {
            type: GRAPHQL.GraphQLFloat
        },
        paid: {
            type: GRAPHQL.GraphQLFloat
        },
        user: {
            type: GRAPHQL.GraphQLString
        },
        menu: {
            type: GRAPHQL.GraphQLString
        }
    })
})