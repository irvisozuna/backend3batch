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

var queryAllMenus = {
    type: new GRAPHQL.GraphQLList(_menus3.MenuType),
    resolve: function resolve() {
        var menus = _menus2.default.find().exec();
        if (!menus) throw new Error("Error at fetching Menu");
        return menus;
    }
};

exports.default = queryAllMenus;