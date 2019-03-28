const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {type:Number, required:true},
    username: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
    mobilenumber: { type: String, required: true },
    emailid: { type: String, required: true },
    password: { type: String, required: true },
    isuserlocked: { type: String, required: true },
    lastusedon: { type: String, required: true },
    active: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('patient', schema);