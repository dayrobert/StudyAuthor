var express = require('express');
var router = express.Router();

var mongo = require('mongoose');

var studies = [
    { id: 1, name: 'cars' },
    { id: 2, name: 'birds' },
    { id: 3, name: 'weather' }
];

//  get all studies
router.get('/', function (req, res) {
    res.send(studies);
});

// get a study
router.get('/:studyid', function (req, res) {
    var studyid = req.params.studyid;
    var ret = studies.find(function (r) {
        return r.id == studyid;
    });

    if (!ret) {
        res.sendStatus(404);
    }

    res.send(ret);
});

// update a study
router.put('/:studyid', function (req, res) {
    var studyid = req.params.studyid;
    var ret = studies.find(function (r) {
        return r.id == studyid;
    });

    if (!ret) {
        res.sendStatus(404);
    }

    ret.name = req.body.name;
    res.status(200).send(ret);
});

// Add a study
router.post('/', function (req, res) {
    var newStudy = {
        id: 100,
        name: req.body.name
    };

    studies.push(newStudy);
    res.status(202).send(newStudy);
});

// delete a study
router.delete('/:studyid', function (req, res) {
    var studyid = req.params.studyid;

    for (var i = 0; i < studies.length; ++i) {
        if (studies[i].id == studyid) {
            studies.splice(i, 1);
            res.sendStatus(200);
            return;
        }
    }

    res.sendStatus(404);
});

module.exports = router;