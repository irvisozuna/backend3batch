import Menu from '../../../schemas/menus';
import { MenuType ,MenuInputType } from '../../types/menus';
import * as graphql from 'graphql';

export default {

    type:MenuType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(MenuInputType)
        }
    },
    resolve(root,params){
        const menu = new Menu(params.data)
        const newMenu = menu.save();
        if(!newMenu) throw new Error("Error at creating menu")
        return newMenu
    }
}