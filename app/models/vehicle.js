var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VehicleSchema = new Schema({
	model			: { type:  Schema.Types.ObjectId, ref: 'Model', required: true },
	year			: { type: Number, required: true },
	price			: { type: Number, required: true },
	gallery			: [
		{
			image	: { type:  Schema.Types.ObjectId, ref: 'Images', required: true },
			order	: { type: Number, default: 0 }
		}
	],
	color			: { type:  Schema.Types.ObjectId, ref: 'Color' },
	transmission	: { type: String, enum: [ 'Automatic', 'Mechanic' ] },
	components		: [
		{ type:  Schema.Types.ObjectId, ref: 'Component' }
	]
});

mongoose.model('Vehicle', VehicleSchema);
