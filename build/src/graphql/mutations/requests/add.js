'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requests = require('../../../schemas/requests');

var _requests2 = _interopRequireDefault(_requests);

var _requests3 = require('../../types/requests');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    type: _requests3.RequestType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_requests3.RequestInputType)
        }
    },
    resolve: function resolve(root, params) {
        var request = new _requests2.default(params.data);
        var newRequest = request.save();
        if (!newRequest) throw new Error("Error at creating balance");
        return newRequest;
    }
};