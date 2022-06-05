var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/data', function(req, res, next) {
  res.json({name:req.query.name,age:req.query.age,country:req.query.country});
});
router.post('/about', function(req, res, next) {
  // res.send("hello");
  res.json({name:req.body.name,age:req.body.age,country:req.body.country});
});
module.exports = router;
