var mongoose = require('mongoose');
var Model = mongoose.model('Model');

exports.index = function(req, res){
	Model.find(function(err, result){
		if(err) throw new Error(err);

		res.json( result );
	}).populate( 'make' );
};