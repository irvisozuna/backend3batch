import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const userRolSchema = new Schema({
    'rol': {
        type: Schema.Types.ObjectId,
        ref: 'roles'
    },
    'user': {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
},{collection: 'userRol', timestamps: true});

export default mongoose.model('userRol', userRolSchema);