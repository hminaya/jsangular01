var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TheSchema = new Schema({
	name		: { type: String, required: true },
	hex			: { type: String }
});


//###### STATICS: ######//
var Statics			= require( './core/statics' );

TheSchema.statics	= new Statics();

TheSchema.statics.$publicFields	= [ 'name', 'hex' ];

TheSchema.statics.$find = function $find(filters, callback) {
	return this.find( filters, callback ).populate( 'logo' );
}

//###### SET UP: ######//


mongoose.model('Color', TheSchema);
