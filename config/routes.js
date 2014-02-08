module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);

	//admin:
	var admin = require('../app/controllers/admin');
	app.get( '/admin', admin.index );
	app.get( '/admin/:module', admin.module );
	app.post( '/admin/:model/create', admin.create );
	app.post( '/admin/:model/update/:id', admin.update );
	app.get( '/admin/:model/delete/:id', admin.delete );

	//API:
	//make:
	var make = require( '../app/controllers/make' );
	app.get( '/api/make', make.index );
	app.post( '/api/make', make.create );
	app.post( '/api/make/:id', make.update );
	app.delete( '/api/make/:id', make.delete );

	//model:
	var model = require( '../app/controllers/model' );
	app.get( '/api/model', model.index );

};
