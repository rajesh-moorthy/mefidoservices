const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const State = db.State;

module.exports = {
    getAllStates,
    getStateById,
    getStateByCountry
};



async function getAllStates() {
    return await State.find().select(any);
}

async function getStateById(id) {
    return await State.findById(id).select(any);
}

async function getStateByCountry(countryid) {
    return await State.findById(countryid).select(any);
}

