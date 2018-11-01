'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _balances = require('./balances');

var _balances2 = _interopRequireDefault(_balances);

var _companies = require('./companies');

var _companies2 = _interopRequireDefault(_companies);

var _menus = require('./menus');

var _menus2 = _interopRequireDefault(_menus);

var _requests = require('./requests');

var _requests2 = _interopRequireDefault(_requests);

var _roles = require('./roles');

var _roles2 = _interopRequireDefault(_roles);

var _userRol = require('./userRol');

var _userRol2 = _interopRequireDefault(_userRol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _users2.default, _balances2.default, _companies2.default, _menus2.default, _requests2.default, _roles2.default, _userRol2.default);