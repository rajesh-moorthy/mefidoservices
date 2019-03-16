const express = require('express');
const router = express.Router();
const countryservice = require('./country.service');

// routes
router.get('/', getAllCountries);
router.get('/:id', getCountryById);

module.exports = router;

function getAllCountries(req, res, next) {
    countryservice.getAllCountries()
        .then(countries => res.json(countries))
        .catch(err => next(err));
}

function getCountryById(req, res, next) {
    countryservice.getCountryById(req.params.id)
        .then(countries => countries ? res.json(countries) : res.sendStatus(404))
        .catch(err => next(err));
}
