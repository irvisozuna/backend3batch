'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestInputType = exports.RequestType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _menus = require('./menus');

var _menus2 = require('../../schemas/menus');

var _menus3 = _interopRequireDefault(_menus2);

var _users = require('../../schemas/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('./users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RequestType = exports.RequestType = new GRAPHQL.GraphQLObjectType({
    name: "Request",
    description: "Types of request",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            company: {
                type: _menus.MenuType,
                resolve: function resolve(menu) {
                    var menus = menu.menus;

                    return _menus3.default.findById(menus).exec();
                }
            },
            user: {
                type: _users3.UserType,
                resolve: function resolve(user) {
                    var users = user.users;

                    return _users2.default.findById(users).exec();
                }
            }
        };
    }
});

var RequestInputType = exports.RequestInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRequest',
    description: "Add Request",
    fields: function fields() {
        return {
            company: {
                type: GRAPHQL.GraphQLString
            },
            user: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});