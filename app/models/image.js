var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TheSchema = new Schema({
	path		: { type: String, required: true },
	title		: { type: String },
	description	: { type: String }
});


//###### STATICS: ######//
var Statics			= require( './core/statics' );

TheSchema.statics	= new Statics();

TheSchema.statics.$publicFields	= [ 'path', 'title', 'description' ];

TheSchema.statics.$find = function $find(filters, callback) {
	return this.find( filters, callback );
}

//###### SET UP: ######//


mongoose.model('Image', TheSchema);
