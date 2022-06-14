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
  res.send("to delete any data enter the id no. in url after delete")
});
  router.get('/delete/:d', function (req, res) {
  con.connect(function(err) {
    // if (err) throw err;
    var id = req.params.d;
    var sql = 'DELETE FROM table_name WHERE id = ?';
    con.query(sql,[id], function (err, result) {
      // if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
      res.redirect('/read')
    });
  });
});

module.exports = router;  