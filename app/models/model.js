var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TheSchema = new Schema({
	name	: { type: String, required: true },
	make	: { type:  Schema.Types.ObjectId, ref: 'Make', required: true }
});

//###### STATICS: ######//
var Statics			= require( './core/statics' );

TheSchema.statics	= new Statics();

TheSchema.statics.$publicFields	= [ 'name', 'make' ];

TheSchema.statics.$find = function $find(filters, callback) {
	return this.find( filters, callback ).populate( 'make' );
}

//###### SET UP: ######//

mongoose.model('Model', TheSchema);
