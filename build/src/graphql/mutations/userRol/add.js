'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userRol = require('../../../schemas/userRol');

var _userRol2 = _interopRequireDefault(_userRol);

var _userRol3 = require('../../types/userRol');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _userRol3.UserRoleType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_userRol3.UserRoleInputType)
        }
    },
    resolve: function resolve(root, params) {
        var userRol = new _userRol2.default(params.data);
        var newUserRol = userRol.save();
        if (!newUserRol) throw new Error("Error at creating rol");
        return newUserRol;
    }
};