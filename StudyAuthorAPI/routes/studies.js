var express = require('express');
var router = express.Router();

var mongo = require('mongoose');

var studies = [
    { id: 1, name: 'cars' },
    { id: 2, name: 'birds' },
    { id: 3, name: 'weather' }
];


/* GET users listing. */
router.get('/', function (req, res) {
    res.send(studies);
});

module.exports = router;