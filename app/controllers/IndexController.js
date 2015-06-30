
module.exports = function( app ) {
    var controller = {
			calc : function(request, response){
				   response.render("calculadora/calc");
				   
			},
			somar : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   var num2 = parseInt(request.body.num2);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.somarNumero(num1,num2)
				   });
			},
			sub : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   var num2 = parseInt(request.body.num2);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.subNumero(num1,num2)
				   });
			},
			mult : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   var num2 = parseInt(request.body.num2);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.multNumero(num1,num2)
				   });
			},
			div : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   var num2 = parseInt(request.body.num2);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.divNumero(num1,num2)
				   });
			},
			raiz : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.raizNumero(num1)
				   });
			},
			pow : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   var num2 = parseInt(request.body.num2);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.powNumero(num1,num2)
				   });
			},
			log : function(request, response){
				   var num1 = parseInt(request.body.num1);
				   
				   response.render("calculadora/calc",{
					   resultado : controller.logNumero(num1)
				   });
			},
			somarNumero : function(num1,num2){
				var resultado = num1 + num2;
				return resultado;
			},
			subNumero:function(num1,num2){
				var resultado = num1 - num2;
				return resultado;
			},
			multNumero:function(num1,num2){
				var resultado = num1 * num2;
				return resultado;
			},
			divNumero:function(num1,num2){
				var resultado = num1 / num2;
				return resultado;
			},
			raizNumero:function(num1){
				var resultado = Math.sqrt(num1);
				return resultado;
			},
			powNumero:function(num1,num2){
				var resultado = Math.pow(num1,num2);
				return resultado;
			},
			logNumero:function(num1){
				var resultado = Math.log(num1);
				return resultado;
			},
			somar100aoNumero:function(num1){
				var resultado = Number(num1);
						resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;resultado += 1;
				return resultado;
			},
			piNumero : function (){
				var resultado = Math.PI;
				return resultado;
			},
			piNumero2x : function (){
				var resultado = Math.PI + Math.PI;
				return resultado;
			},
			log10Numero : function (){
				var resultado = Math.LOG10E;
				return resultado;
			},
			log10Numero2x : function (){
				var resultado = Math.LOG10E + Math.LOG10E;
				return resultado;
			},
			log2Numero : function (){
				var resultado = Math.LOG2E;
				return resultado;
			},
			log2Numero2x : function (){
				var resultado = Math.LOG2E + Math.LOG2E;
				return resultado;
			}
			
	};
    return controller;
};
