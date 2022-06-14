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
      res.json({"Name":result})
    });
  });
});

  router.get('/delete', function (req, res) {
    // res.send(req.params)
  con.connect(function(err) {
    // if (err) throw err;
    var sql = 'DELETE FROM table_name WHERE id =4 ';
    var id = [req.params];
    con.query(sql, function (err, result) {
      // if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
      res.redirect('/read')
    });
  });
});
module.exports = router;  