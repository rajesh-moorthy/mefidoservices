const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sortname: { type: String,  required: true },
    name: { type: String, required: true },
    phonecode: { type: String, required: true },
    active: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('country', schema);