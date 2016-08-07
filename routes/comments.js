var express = require('express');
var router = express.Router();

var comments = require('../comments.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('comments', {
        test: comments
    });
});

module.exports = router;
