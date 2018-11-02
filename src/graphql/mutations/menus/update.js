import Menu from '../../../schemas/menus';
import { MenuType ,MenuInputType } from '../../types/menus';
import * as graphql from 'graphql';

export default{
    type: MenuType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(MenuInputType)
        }
    },
    resolve(root,params){
        return Menu.findOneAndUpdate(params.id,{$set:{...params.data}})
                        .then((menu)=> Menu.findById(menu.id).exec())
                        .catch((err) => new Error('Couldnt update menu data', err))
    }
}



