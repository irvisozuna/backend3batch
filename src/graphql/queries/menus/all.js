import * as GRAPHQL from 'graphql';

import Menu from '../../../schemas/menus';
import { MenuType } from '../../types/menus';


const queryAllMenus = {
    type : new GRAPHQL.GraphQLList(MenuType),
    resolve(){
        const menus = Menu.find().exec()
        if(!menus) throw new Error("Error at fetching Menu");
        return menus
    }
}

export default queryAllMenus;