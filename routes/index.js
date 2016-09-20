var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/calculate', function (req, res) {
    var data = req.data.restaurantMenu;
    console.log(data.length);
});
module.exports = router;
