import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const MenusSchema = new Schema({
    'company': {
        type: Schema.Types.ObjectId,
        ref: 'companies',
        require: true
    },
    'date' : {
        type: Date,
        require: true
    },
    'description': {
        type: String
    },
    'image': {
        type: String
    },
    'price': {
        type: Number
    }
},{collection: 'menus', timestamps: true});

export default mongoose.model('menus', MenusSchema);