module.exports = function (app, express) {
  var bodyParser = require('body-parser'),
    fs = require('fs'),
    db = require('./db')
    
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(__dirname + './../dist'));
  app.use(express.static(__dirname + './../node_modules'));

  fs.readdirSync('./server/controllers').forEach((file) => {
    if (file.substr(-3) == '.js') { require('./controllers/' + file)(app); }
  });
}
