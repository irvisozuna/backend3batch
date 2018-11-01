'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _userRol = require('../../../schemas/userRol');

var _userRol2 = _interopRequireDefault(_userRol);

var _userRol3 = require('../../types/userRol');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var querySingleUserRol = {

    type: _userRol3.UserRolType,
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var userRol = _userRol2.default.findById(params.id).exec();
        return userRol;
    }
};

exports.default = querySingleUserRol;