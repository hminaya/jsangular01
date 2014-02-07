var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorSchema = new Schema({
	name		: { type: String, required: true },
	hex			: { type: String }
});

mongoose.model('Color', ColorSchema);
