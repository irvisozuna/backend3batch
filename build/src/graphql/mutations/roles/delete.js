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
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedRol = _roles2.default.findByIdAndRemove(params.id).exec();
        if (!deletedRol) throw Error("Error on delete");
        return deletedRol;
    }
};