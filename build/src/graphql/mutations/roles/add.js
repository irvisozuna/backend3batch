'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _roles = require('../../../schemas/roles');

var _roles2 = _interopRequireDefault(_roles);

var _roles3 = require('../../types/roles');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _roles3.RoleType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_roles3.RoleInputType)
        }
    },
    resolve: function resolve(root, params) {
        var rol = new _roles2.default(params.data);
        var newRol = rol.save();
        if (!newRol) throw new Error("Error at creating rol");
        return newRol;
    }
};