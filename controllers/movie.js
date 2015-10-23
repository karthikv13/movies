var Movie = require('../models/Movie');

exports.getAllMovies = function(req,res,next){
   if(req.query.keyword && req.query.category)
    {
        Movie.find({'category':req.query.category,'name':new RegExp('^'+req.query.keyword+'$')}).exec(function(err,movies){
           if(err) next(err);
           res.json(movies);
        });
    
    }
    else if(req.query.category)
    {
        Movie.find({'category':req.query.category}).exec(function(err,movies){
           if(err) next(err);
           res.json(movies);
        });
    }
    else if(req.query.keyword)
    {
        Movie.find({'name':new RegExp('^'+req.query.keyword+'$')}).exec(function(err,movies){
           if(err) next(err);
           res.json(movies);
        });
    }
    else
    {
        Movie.find({}).exec(function(err,movies){
            if(err) next(err);
            res.json(movies);
        });
    }
}

exports.postCreateMovie = function(req, res, next) {
  var movie = new Movie({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    description: req.body.description
  });
//  movie.cast = JSON.parse(req.body.cast);
  movie.save(function(err, movie){
    res.send(200);
  });
}

exports.getMovieById = function(req,res,next){
  Movie.findById(req.params.id).exec(function(err,movie){
    if(err) return(err);
    res.json(movie);
  });
}

exports.putMovieById = function(req,res){
  Movie.findById(req.params.id).exec(function(err,movie){
    movie.name = req.body.name;
    movie.image = req.body.image;
    movie.category = req.body.category;
    movie.description = req.body.description;
    //movie.cast.name = req.body.cast[0].name;
    //movie.cast.image = req.body.cast[0].image;
    movie.save();
    res.send(200);
  });
}

exports.deleteMovieById = function(req,res){
  Movie.findById(req.params.id).remove().exec(function(err,movie){
    res.send(200);
  });
}
