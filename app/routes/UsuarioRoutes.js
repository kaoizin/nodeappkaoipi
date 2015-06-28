module.exports = function(app){
	
	var controller = app.controllers.UsuarioController;	
	
	app.route('/').get(controller.layout);		
	app.route('/cadastro').get(controller.create);	
	app.route('/lista').get(controller.lista);
	app.route('/teste').get(controller.teste);
	app.route('/usuarios').post(controller.insert);
}