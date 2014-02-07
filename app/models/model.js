var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
	name	: { type: String, required: true },
	make	: { type:  Schema.Types.ObjectId, ref: 'Make', required: true }
});

mongoose.model('Model', ModelSchema);
