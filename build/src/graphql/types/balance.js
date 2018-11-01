"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BalanceInputType = exports.BalanceType = undefined;

var _graphql = require("graphql");

var GRAPHQL = _interopRequireWildcard(_graphql);

var _users = require("./users");

var _menus = require("./menus");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var BalanceType = exports.BalanceType = new GRAPHQL.GraphQLObjectType({
    name: "Balance",
    description: "Types of Balance",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            due: {
                type: GRAPHQL.GraphQLFloat
            },
            paid: {
                type: GRAPHQL.GraphQLFloat
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(balance) {
                    var user = balance.user;

                    return User.findById(user).exec();
                }
            },
            menu: {
                type: _menus.MenuType,
                resolve: function resolve(balance) {
                    var menu = balance.menu;

                    return Menu.findById(menu).exec();
                }
            }
        };
    }
});

var BalanceInputType = exports.BalanceInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addBalance',
    description: "Add Balance",
    fields: function fields() {
        return {
            due: {
                type: GRAPHQL.GraphQLFloat
            },
            paid: {
                type: GRAPHQL.GraphQLFloat
            },
            user: {
                type: GRAPHQL.GraphQLString
            },
            menu: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});