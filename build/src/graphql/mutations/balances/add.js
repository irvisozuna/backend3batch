'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_balance3.BalanceInputType)
        }
    },
    resolve: function resolve(root, params) {
        var balance = new _balance2.default(params.data);
        var newBalance = balance.save();
        if (!newBalance) throw new Error("Error at creating balance");
        return newBalance;
    }
};