import * as GRAPHQL from 'graphql';

import Menu from '../../../schemas/menus';

import { MenuType } from '../../types/menus';

const querySingleMenu = {

    type: MenuType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const menu = Menu.findById(params.id).exec()
        return menu
    }
}

export default querySingleMenu;