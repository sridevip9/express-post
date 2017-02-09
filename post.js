var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var user = [{
  firstName: "John",
  lastName: "Doe",
  email: 'jdoe@yahoo.com'
}, {
  firstName: "Johny",
  lastName: "Doel",
  email: 'jdoel@yahoo.com'
}, {
  firstName: "John",
  lastName: "smith",
  email: 'jsmith@yahoo.com'
}];
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).send("welcome to express world");
});
app.get('/user', function(req, res) {
  res.status(200).json(user);
});
app.post('/user', function(req, res) {
  res.status(200).json(req.body);
});
app.listen(3000, function() {
  console.log("server listening port 3000....")
});
