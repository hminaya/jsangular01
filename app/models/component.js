var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TheSchema = new Schema({
	name		: { type: String, required: true }
});


//###### STATICS: ######//
var Statics			= require( './core/statics' );

TheSchema.statics	= new Statics();

TheSchema.statics.$publicFields	= [ 'name' ];

TheSchema.statics.$find = function $find(filters, callback) {
	return this.find( filters, callback );
}

//###### SET UP: ######//


mongoose.model('Component', TheSchema);
