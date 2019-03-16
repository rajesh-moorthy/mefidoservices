const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const City = db.City;

module.exports = {
    getAllCities,
    getCityById,
    getCityByState
};



async function getAllCities() {
    return await City.find().select(any);
}

async function getCityById(id) {
    return await City.findById(id).select(any);
}

async function getCityByState(stateid) {
    return await City.findById(stateid).select(any);
}

