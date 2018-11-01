'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _balance = require('../../../schemas/balance');

var _balance2 = _interopRequireDefault(_balance);

var _balance3 = require('../../types/balance');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _balance3.BalanceType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_balance3.BalanceInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _balance2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (balance) {
            return _balance2.default.findById(balance.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt update Genre data', err);
        });
    }
};