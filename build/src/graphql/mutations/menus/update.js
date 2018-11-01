'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_menus3.MenuInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _menus2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (menu) {
            return _menus2.default.findById(menu.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt update menu data', err);
        });
    }
};