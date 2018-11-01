'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _companies = require('../../../schemas/companies');

var _companies2 = _interopRequireDefault(_companies);

var _companies3 = require('../../types/companies');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _companies3.CompanyType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_companies3.CompanyInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _companies2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (company) {
            return _companies2.default.findById(company.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt update company data', err);
        });
    }
};