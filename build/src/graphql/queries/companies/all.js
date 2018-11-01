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

var queryAllCompanies = {
    type: new GRAPHQL.GraphQLList(_companies3.CompanyType),
    resolve: function resolve() {
        var companies = _companies2.default.find().exec();
        if (!companies) throw new Error("Error at fetching company");
        return companies;
    }
};

exports.default = queryAllCompanies;