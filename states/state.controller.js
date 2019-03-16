const express = require('express');
const router = express.Router();
const stateservice = require('./state.service');

// routes
router.get('/', getAllStates);
router.get('/:id', getStateById);
router.get('/:countryid', getStateByCountry);

module.exports = router;

function getAllStates(req, res, next) {
    stateservice.getAllStates()
        .then(state => res.json(state))
        .catch(err => next(err));
}

function getStateById(req, res, next) {
    stateservice.getStateById(req.params.id)
        .then(state => state ? res.json(state) : res.sendStatus(404))
        .catch(err => next(err));
}

function getStateByCountry(req, res, next) {
    stateservice.getStateByCountry(req.params.countryid)
        .then(state => state ? res.json(state) : res.sendStatus(404))
        .catch(err => next(err));
}
