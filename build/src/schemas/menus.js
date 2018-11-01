'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MenusSchema = new Schema({
    'company': {
        type: Schema.Types.ObjectId,
        ref: 'companies',
        require: true
    },
    'date': {
        type: Date,
        require: true
    },
    'description': {
        type: String
    },
    'image': {
        type: String
    }
}, { collection: 'menus', timestamps: true });

exports.default = _mongoose2.default.model('menus', MenusSchema);