const express = require('express');
const router = express.Router();
const patientservice = require('./patient.service');

// routes
router.get('/', getAllPatients);
router.get('/:id', getPatientById);
router.get('/:mobileno', getPatientByMobileno);
router.get('/:emailid', getPatientByEmailId);

module.exports = router;

function getAllPatients(req, res, next) {
    patientservice.getAllPatients()
        .then(patients => res.json(patients))
        .catch(err => next(err));
}

function getPatientById(req, res, next) {
    patientservice.getPatientById(req.params.id)
        .then(patients => patients ? res.json(patients) : res.sendStatus(404))
        .catch(err => next(err));
}

function getPatientByMobileno(req, res, next) {
    patientservice.getPatientByMobileno(req.params.mobileno)
        .then(patients => patients ? res.json(patients) : res.sendStatus(404))
        .catch(err => next(err));
}

function getPatientByEmailId(req, res, next) {
    patientservice.getPatientByEmailId(req.params.emailid)
        .then(patients => patients ? res.json(patients) : res.sendStatus(404))
        .catch(err => next(err));
}
