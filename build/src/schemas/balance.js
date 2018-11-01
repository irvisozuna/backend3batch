'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var balanceSchema = new Schema({
    'menu': {
        type: Schema.Types.ObjectId,
        ref: 'menus'
    },
    'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    'due': {
        type: Number
    },
    'paid': {
        type: Number
    }
}, { collection: 'balance', timestamps: true });

exports.default = _mongoose2.default.model('balance', balanceSchema);