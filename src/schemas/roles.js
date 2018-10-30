import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const RolesSchema = new Schema({
    'name' : {
        type: String,
        require: true
    },
    'description': {
        type: String
    }
},{collection: 'roles', timestamps: true});

export default mongoose.model('roles', RolesSchema);