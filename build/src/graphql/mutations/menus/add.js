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
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_menus3.MenuInputType)
        }
    },
    resolve: function resolve(root, params) {
        var menu = new _menus2.default(params.data);
        var newMenu = menu.save();
        if (!newMenu) throw new Error("Error at creating menu");
        return newMenu;
    }
};