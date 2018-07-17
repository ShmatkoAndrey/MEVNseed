var express = require('express'), server, app = express();

require('./server/server.js')(app, express)
const env = require("./server/env");

app.get('/*', (req, res) => {
  res.set({ 'content-type': 'text/html; charset=utf-8' })
  res.sendFile(__dirname + '/dist/index.html');
});

var pt = process.env.PORT ? process.env.PORT : (env.port ? env.port : 8080);

server = app.listen(pt, () => {
  console.log('Listening port :' + pt);
});
