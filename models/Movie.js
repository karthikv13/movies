var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
	name: String,
	image: String,
	category: String,
	description: String,
	cast: [{
		image: String,
		name: String
	}]
});
module.exports = mongoose.model('Movie', movieSchema);