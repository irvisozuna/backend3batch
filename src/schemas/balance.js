import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const balanceSchema = new Schema({
    'menu': {
        type: Schema.Types.ObjectId,
        ref: 'menus'
    },
    'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    'due': {
        type: Number,
    },
    'paid': {
        type: Number,
    },
},{collection: 'balance', timestamps: true});

export default mongoose.model('balance', balanceSchema);