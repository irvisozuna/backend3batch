'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menus = require('../../../schemas/menus');

var _menus2 = _interopRequireDefault(_menus);

var _menus3 = require('../../types/menus');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _menus3.MenuType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedMenu = _menus2.default.findByIdAndRemove(params.id).exec();
        if (!deletedMenu) throw Error("Error on delete");
        return deletedMenu;
    }
};