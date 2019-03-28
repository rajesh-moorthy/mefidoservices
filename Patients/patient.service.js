const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Patient = db.Patient;

module.exports = {
    getAllPatients,
    getPatientById,
    getPatientByMobileno,
    getPatientByEmailId
};



async function getAllPatients() {
    return await State.find().select(any);
}

async function getPatientById(id) {
    return await State.findById(id).select(any);
}

async function getPatientByMobileno(mobileno) {
    return await State.find(mobileno).select(any);
}

async function getPatientByEmailId(emailid) {
    return await State.find(emailid).select(any);
}

