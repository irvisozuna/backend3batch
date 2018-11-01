"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserRoleInputType = exports.UserRoleType = undefined;

var _graphql = require("graphql");

var GRAPHQL = _interopRequireWildcard(_graphql);

var _users = require("./users");

var _roles = require("./roles");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var UserRoleType = exports.UserRoleType = new GRAPHQL.GraphQLObjectType({
    name: "UserRoles",
    description: "Roles of Users",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            rol: {
                type: _roles.RoleType,
                resolve: function resolve(userRol) {
                    var rol = userRol.rol;

                    return Rol.findById(rol).exec();
                }
            },
            user: {
                type: _users.UserType,
                resolve: function resolve(userRol) {
                    var user = userRol.user;

                    return User.findById(user).exec();
                }
            }
        };
    }
});

var UserRoleInputType = exports.UserRoleInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addUserRoles',
    description: "Add User Role",
    fields: function fields() {
        return {
            rol: {
                type: GRAPHQL.GraphQLString
            },
            user: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});