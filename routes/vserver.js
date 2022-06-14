var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "data"
});

router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL!");
      });
    res.render('vserver')
});

router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `form_details` (`name`, `country`, `age`) \
    VALUES ('"+req.body.name+"', '"+req.body.country+"', '"+req.body.age+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
//       var sql1 = "select * from `form_details`"
//       con.query(sql1, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//       });
res.json({"Name":req.body})
});

// router.get('/where', function(req, res, next) {
//   //   res.send('eraf');
//     console.log(req)
//     res.json({name:"eraf"})
//   });

module.exports = router;