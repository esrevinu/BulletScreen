var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    var config = JSON.parse(fs.readFileSync(__dirname + './../public/jsons/config.json'));
    res.render('emit', {
        title: 'Emitter',
        sizes: config.sizes,
        modes: config.modes,
        colors: config.colors,
        durations: config.durations,
        inits: config.inits
    });
});

module.exports = router;