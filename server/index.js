var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var Food = require('./getfunction')


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(require("body-parser").json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/cuisine', function (req, res) {
   console.log(data)
  // items.save(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.post('/cuisine', function(req, res) {
Food.getListofFood(req.body.value, function(err, result){
  console.log('result', result)
  items.save(JSON.parse(result))
});
console.log(req.body.value, "here!!!!")
  res.end('Stored Yummy!')
})



var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on port 3000!');
});

