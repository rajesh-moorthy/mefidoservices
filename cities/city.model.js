const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: {type:Number, required:true},
    name: { type: String, unique: true, required: true },
    stateid: { type: String, required: true },
    active: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('city', schema);