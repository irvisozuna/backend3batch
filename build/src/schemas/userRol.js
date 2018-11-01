'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userRolSchema = new Schema({
    'rol': {
        type: Schema.Types.ObjectId,
        ref: 'roles'
    },
    'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, { collection: 'userRol', timestamps: true });

exports.default = _mongoose2.default.model('userRol', userRolSchema);