var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MakeSchema = new Schema({
	name	: { type: String, required: true },
	logoUrl	: { type: String, default: null }
});

mongoose.model('Make', MakeSchema);
