
module.exports = function(app){
	var controller = app.controllers.IndexController;
	app.route('/calculadora')
		.get(controller.calc);
	app.route('/soma').post(controller.somar);	
	app.route('/subtrair').post(controller.sub);	
	app.route('/multiplicar').post(controller.mult);	
	app.route('/dividir').post(controller.div);	
	app.route('/raiz').post(controller.raiz);
	app.route('/log').post(controller.log);
	app.route('/pow').post(controller.pow);
	
}