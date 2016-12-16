var express = require("express");
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/',function(req,res,next){
    var config = JSON.parse(fs.readFileSync(__dirname + './../public/jsons/config.json'));
    res.render('index', {
        title: 'Bullet Screen',
        sizes: config.sizes,
        modes: config.modes,
        colors: config.colors,
        durations: config.durations,
        inits: config.inits
    });
});

module.exports = router;