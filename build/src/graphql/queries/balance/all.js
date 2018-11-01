'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _balance = require('../../../schemas/balance');

var _balance2 = _interopRequireDefault(_balance);

var _balance3 = require('../../types/balance');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllBalances = {
    type: new GRAPHQL.GraphQLList(_balance3.BalanceType),
    resolve: function resolve() {
        var balances = _balance2.default.find().exec();
        if (!balances) throw new Error("Error at fetching balances");
        return balances;
    }
};

exports.default = queryAllBalances;