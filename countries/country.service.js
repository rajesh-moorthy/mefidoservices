const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Country = db.Country;

module.exports = {
    getAllCountries,
    getCountryById
};



async function getAllCountries() {
    return await Country.find().select(any);
}

async function getCountryById(id) {
    return await Country.findById(id).select('-hash');
}

