import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const requestsSchema = new Schema({
    'menu': {
        type: Schema.Types.ObjectId,
        ref: 'menus'
    },
    'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
},{collection: 'requests', timestamps: true});

export default mongoose.model('requests', requestsSchema);