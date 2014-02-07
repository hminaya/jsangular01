var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
	path		: { type: String, required: true },
	title		: { type: String },
	description	: { type: String }
});

mongoose.model('Image', ImageSchema);
