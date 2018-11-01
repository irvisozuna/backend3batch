'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuInputType = exports.MenuType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _companies = require('./companies');

var _companies2 = require('../../schemas/companies');

var _companies3 = _interopRequireDefault(_companies2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MenuType = exports.MenuType = new GRAPHQL.GraphQLObjectType({
    name: "Menu",
    description: "Types of menus",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            image: {
                type: GRAPHQL.GraphQLString
            },
            description: {
                type: GRAPHQL.GraphQLString
            },
            company: {
                type: _companies.CompanyType,
                resolve: function resolve(company) {
                    var companies = company.companies;

                    return _companies3.default.findById(companies).exec();
                }
            },
            date: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});

var MenuInputType = exports.MenuInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addMenu',
    description: "Add Menu",
    fields: function fields() {
        return {
            name: {
                type: GRAPHQL.GraphQLString
            },
            image: {
                type: GRAPHQL.GraphQLString
            },
            description: {
                type: GRAPHQL.GraphQLString
            },
            company: {
                type: GRAPHQL.GraphQLString
            },
            date: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});