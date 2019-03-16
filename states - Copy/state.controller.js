const express = require('express');
const router = express.Router();
const stateservice = require('./state.service');

// routes
router.get('/', getAllStates);
router.get('/:id', getCountryById);
router.get('/:countryid', getStateByCountry);

module.exports = router;

function getAllStates(req, res, next) {
    countryservice.getAllStates()
        .then(countries => res.json(countries))
        .catch(err => next(err));
}

function getStateById(req, res, next) {
    countryservice.getStateById(req.params.id)
        .then(countries => countries ? res.json(countries) : res.sendStatus(404))
        .catch(err => next(err));
}

function getStateByCountry(req, res, next) {
    countryservice.getStateByCountry(req.params.countryid)
        .then(countries => countries ? res.json(countries) : res.sendStatus(404))
        .catch(err => next(err));
}
