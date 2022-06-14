var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});


router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL server!");
      });
    res.render('index')
});

router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `table_name` (`name`, `country`,`age`) \
    VALUES ('"+req.body.name+"', '"+req.body.country+"','"+req.body.age+"');"
    // console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json({"Name":req.body})
      });
});

router.get('/read', function (req, res) {
  con.connect(function(err) {
    // if (err) throw err;
    con.query("SELECT * FROM table_name", function (err, result, fields) {
      // if (err) throw err;
      console.log(result);
      res.send(JSON.stringify(result));
    });
  });
});



module.exports = router;