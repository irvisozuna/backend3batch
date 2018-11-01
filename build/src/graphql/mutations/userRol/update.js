'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_userRol3.UserRoleInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _userRol2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (userRol) {
            return _userRol2.default.findById(userRol.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt update Genre data', err);
        });
    }
};