module.exports = function(app){
	
	var controller = app.controllers.UsuarioController;	
	
	app.route('/').get(controller.layout);		
	app.route('/cadastro').get(controller.create);	
	app.route('/lista').get(controller.lista);
	app.route('/teste').get(controller.listaJson);
	app.post('/listaCad', controller.insert);
	app.get('/edit/:id', controller.edit);
	app.put('/edit/:id', controller.update);
	app.get('/delete/:id', controller.remove);
	

}