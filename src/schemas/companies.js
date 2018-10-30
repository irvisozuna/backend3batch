import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const CompaniesSchema = new Schema({
    'name' : {
        type: String,
        require: true
    },
    'description': {
        type: String
    }
},{collection: 'companies', timestamps: true});

export default mongoose.model('companies', CompaniesSchema);