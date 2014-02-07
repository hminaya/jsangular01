var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = new Schema({
	name		: { type: String, required: true }
});

mongoose.model('Component', ComponentSchema);
