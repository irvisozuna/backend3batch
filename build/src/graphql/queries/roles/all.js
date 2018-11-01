'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _roles = require('../../../schemas/roles');

var _roles2 = _interopRequireDefault(_roles);

var _roles3 = require('../../types/roles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllRoles = {
    type: new GRAPHQL.GraphQLList(_roles3.RoleType),
    resolve: function resolve() {
        var roles = _roles2.default.find().exec();
        if (!roles) throw new Error("Error at fetching roles");
        return roles;
    }
};

exports.default = queryAllRoles;