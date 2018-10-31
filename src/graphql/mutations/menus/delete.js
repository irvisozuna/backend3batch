import Menu from '../../../schemas/menus';
import { MenuType ,MenuInputType } from '../../types/menus';
import * as graphql from 'graphql';

export default {
    type: MenuType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedMenu = Menu.findByIdAndRemove(params.id).exec()
        if(!deletedMenu) throw Error("Error on delete")
        return deletedMenu
    }
}