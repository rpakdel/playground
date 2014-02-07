
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var currentValue = 0;
var values = [];

var votes = [];

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/next', function(req, res) {  
  res.json({
    val: currentValue,
    values: values });
});
app.get('/api/votes', function(req, res) {
  res.json({ votes: votes });
});

setInterval(function() { 
  currentValue++;  
  values.push(currentValue);
}, 3000);

var voteCount = [];
voteCount[0] = 0;
voteCount[1] = 0;

var server = http.createServer(app);
var io = require('socket.io').listen(server);

function emitVotes(socket)
{
  if (socket === null)
  {
    io.sockets.emit('voteCount', { numVotes1: voteCount[0], numVotes2: voteCount[1] });
  }
  else
  {
    socket.emit('voteCount', { numVotes1: voteCount[0], numVotes2: voteCount[1] });
  }
}

io.sockets.on('connection', function (socket) {
  //  let client know the current state
  emitVotes(socket);

  // bind
  socket.on('voteReceived', function(data) {
    voteCount[0] += data.numVotes1;
    voteCount[1] += data.numVotes2;

    if (data.numVotes1 == 1)
    {
      votes.push(1);
    }

    if (data.numVotes2 == 1)
    {
      votes.push(2);
    }

    emitVotes(null);
  });
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
