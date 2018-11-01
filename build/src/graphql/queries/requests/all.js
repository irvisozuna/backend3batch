'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _requests = require('../../../schemas/requests');

var _requests2 = _interopRequireDefault(_requests);

var _requests3 = require('../../types/requests');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllRequest = {
    type: new GRAPHQL.GraphQLList(_requests3.RequestType),
    resolve: function resolve() {
        var requests = _requests2.default.find().exec();
        if (!requests) throw new Error("Error at fetching requests");
        return requests;
    }
};

exports.default = queryAllRequest;