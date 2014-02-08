var mongoose = require('mongoose');
var Model = mongoose.model('Make');

exports.index = function(req, res){
	Model.find(function(err, result){
		if(err) throw new Error(err);

		res.json( result );
	});
};

exports.create = function(req, res) {
	Model.$create( req.body, function(err, result) {
		if (err) {
			return res.json( { success: false, error: err, result: null } );
		}

		return res.json( { success: true, result: result } );
	});
}

exports.update = function(req, res) {
	console.log( req.params );
}

exports.delete = function(req, res) {
	console.log( req.params );
}