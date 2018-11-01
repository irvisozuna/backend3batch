"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompanyInputType = exports.CompanyType = undefined;

var _graphql = require("graphql");

var GRAPHQL = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CompanyType = exports.CompanyType = new GRAPHQL.GraphQLObjectType({
    name: "Companies",
    description: "Types of companies",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            name: {
                type: GRAPHQL.GraphQLString
            },
            description: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});

var CompanyInputType = exports.CompanyInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addCompany',
    description: "Add Company",
    fields: function fields() {
        return {
            name: {
                type: GRAPHQL.GraphQLString
            },
            description: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});