//Importing node libraries
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

//Express Object
var app = express();
app.set('port',3000);
//Configuring app Object
app.use(express.static(path.join(__dirname,"public")));
app.use(favicon(path.join(__dirname,'favicon.ico')));
//TODO remove dev logger for production. Create a logger for dev environment.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/movies');
mongoose.connection.on('error',function(){
  console.log("Error: Mongodb is not started. Please start it");
});

var movieControllers = require('./controllers/movie');

app.get('/api/movies',movieControllers.getAllMovies);
app.get('/api/movies/:id',movieControllers.getMovieById);
app.post('/api/movies',movieControllers.postCreateMovie);
app.put('/api/movies/:id',movieControllers.putMovieById);
app.del('/api/movies/:id',movieControllers.deleteMovieById);

//Home Page route
app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

//Start server at port 3000
app.listen(app.get('port'),function(){
	console.log("Express server started on port 3000");
});