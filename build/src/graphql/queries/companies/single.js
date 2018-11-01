'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _companies = require('../../../schemas/companies');

var _companies2 = _interopRequireDefault(_companies);

var _companies3 = require('../../types/companies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var querySingleCompany = {

    type: _companies3.CompanyType,
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var company = _companies2.default.findById(params.id).exec();
        return company;
    }
};

exports.default = querySingleCompany;