'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_companies3.CompanyInputType)
        }
    },
    resolve: function resolve(root, params) {
        var company = new _companies2.default(params.data);
        var newCompany = company.save();
        if (!newCompany) throw new Error("Error at creating company");
        return newCompany;
    }
};