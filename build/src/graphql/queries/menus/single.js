'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _menus = require('../../../schemas/menus');

var _menus2 = _interopRequireDefault(_menus);

var _menus3 = require('../../types/menus');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var querySingleMenu = {

    type: _menus3.MenuType,
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var menu = _menus2.default.findById(params.id).exec();
        return menu;
    }
};

exports.default = querySingleMenu;