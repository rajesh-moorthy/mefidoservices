const express = require('express');
const router = express.Router();
const cityservice = require('./city.service');

// routes
router.get('/', getAllCities);
router.get('/:id', getCityById);
router.get('/:stateid', getCityByState);

module.exports = router;

function getAllCities(req, res, next) {
    cityservice.getAllCities()
        .then(cities => res.json(cities))
        .catch(err => next(err));
}

function getStateById(req, res, next) {
    cityservice.getStateById(req.params.id)
        .then(cities => cities ? res.json(cities) : res.sendStatus(404))
        .catch(err => next(err));
}

function getCityByState(req, res, next) {
    cityservice.getCityByState(req.params.stateid)
        .then(cities => cities ? res.json(cities) : res.sendStatus(404))
        .catch(err => next(err));
}

function insertState() {

}
