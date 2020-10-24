var http = require('http');

var env = require('dotenv');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

env.config();

var serve = serveStatic(process.env.ROUTE_DIST);

var server = http.createServer(function(req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
});


server.listen(process.env.PORT);
