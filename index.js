var express = require('express');
var bodyParser = require('body-parser');

var app = express();

/*var user = [{
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
}]*/
var menu = {
  chips: 2.99,
  coke: .99,
  cookie: 1.99,
  pizza: 3.99
}
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).send("welcome to express world");
});

app.get('/menu', function(req, res) {
  res.status(200);
  if (req.query.filter) {
    var item = req.query.filter;
    var menuItem = {};
    menuItem[item] = menu[item];

    res.json(menuItem);
  } else {
    res.json(menu);
  }
});
app.post('/menu', function(req, res) {
  var total = 0;

  for (var prop in req.body) {
    if (menu[prop]) {
      total += menu[prop];
    }
  }
  res.status(200).send('Your total is $' + total + '.');
});

app.listen(3000, function() {
  console.log("server listening port 3000....")
});
