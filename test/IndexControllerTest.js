var IndexController = require("../app/controllers/IndexController")()

var expect = require("expect");

describe("IndexController", function() {
	it("Espero quando passar 1 e 1 retorne 2", function() {
		var retorno = IndexController.somarNumero(1,1);
		console.log(retorno);
		var esperado = 2;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar -3 e -4 retorne 2", function() {
		var retorno = IndexController.somarNumero(-3,-4);
		console.log(retorno);
		var esperado = -7;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 2 e 3 retorne 5", function() {
		var retorno = IndexController.somarNumero(2,3);
		console.log(retorno);
		var esperado = 5;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 5 e 0 retorne 0", function() {
		var retorno = IndexController.subNumero(5,0);
		var esperado = 5;		
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 5 e 2 retorne 3", function() {
		var retorno = IndexController.subNumero(5,2);
		var esperado = 3;		
		expect(retorno).toEqual(esperado);
	});
	
	it("Espero quando passar 15 e 3 retorne 2", function() {
		var retorno = IndexController.divNumero(15,3);
		console.log(retorno);
		var esperado = 5;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 15 e 3 retorne 2", function() {
		var retorno = IndexController.divNumero(16,-2);
		console.log(retorno);
		var esperado = -8;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 15 e 3 retorne 2", function() {
		var retorno = IndexController.divNumero(-12,-3);
		console.log(retorno);
		var esperado = 4;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 8 e 8 retorne 64", function() {
		var retorno = IndexController.multNumero(8,8);
		console.log(retorno);
		var esperado = 64;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 8 e 8 retorne 64", function() {
		var retorno = IndexController.multNumero(8,-9);
		console.log(retorno);
		var esperado = -72;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar 8 e 8 retorne 64", function() {
		var retorno = IndexController.multNumero(-11,-11);
		console.log(retorno);
		var esperado = 121;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar log 2 retorne 0.6931471805599453", function() {
		var retorno = IndexController.logNumero(2);
		console.log(retorno);
		var esperado = 0.6931471805599453;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar raiz 9 retorne 64", function() {
		var retorno = IndexController.raizNumero(9);
		console.log(retorno);
		var esperado = 3;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar potencia de base 2 no expoente 2 retorne 4", function() {
		var retorno = IndexController.powNumero(2,2);
		console.log(retorno);
		var esperado = 4;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar potencia de base 2 no expoente 3 retorne 8", function() {
		var retorno = IndexController.powNumero(2,3);
		console.log(retorno);
		var esperado = 8;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar pi retorne 3,1416", function() {
		var retorno = IndexController.piNumero();
		console.log(retorno);
		var esperado = 3.141592653589793;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar LOG10 retorne 3,1416", function() {
		var retorno = IndexController.log10Numero();
		console.log(retorno);
		var esperado = 0.4342944819032518;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar LOG2 retorne 3,1416", function() {
		var retorno = IndexController.log2Numero();
		console.log(retorno);
		var esperado = 1.4426950408889634;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar pi + pi retorne 3,1416", function() {
		var retorno = IndexController.piNumero2x();
		console.log(retorno);
		var esperado = 6.283185307179586;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar LOG10 + log10 retorne 3,1416", function() {
		var retorno = IndexController.log10Numero2x();
		console.log(retorno);
		var esperado = 0.8685889638065036;	
		expect(retorno).toEqual(esperado);
	});
	it("Espero quando passar LOG2 + log2 retorne 3,1416", function() {
		var retorno = IndexController.log2Numero2x();
		console.log(retorno);
		var esperado = 2.8853900817779268;	
		expect(retorno).toEqual(esperado);
	});

	it("Espero receber como retorno a view calculadora/calc e o resultado 6", function() {
		var request = { 
						body: 
							{ 
								num1: '3',
								num2: '3'
							}
						};
		var response = criarResponse();
		
		IndexController.somar(request, response);
		
		expect(response.view).toEqual("calculadora/calc");
		expect(response.object.resultado).toEqual(6);
	});
	
	it("Espero receber como retorno a view calculadora/calc e o resultado 4", function() {
		var request = { 
						body: 
							{ 
								num1: '6',
								num2: '2'
							}
						};
		var response = criarResponse();
		
		IndexController.sub(request, response);
		
		expect(response.view).toEqual("calculadora/calc");
		expect(response.object.resultado).toEqual(4);
	});
	
	it("Espero receber como retorno a view calculadora/calc e o resultado 8", function() {
		var request = { 
						body: 
							{ 
								num1: '4',
								num2: '2'
							}
						};
		var response = criarResponse();
		
		IndexController.mult(request, response);
		
		expect(response.view).toEqual("calculadora/calc");
		expect(response.object.resultado).toEqual(8);
	});
	it("Espero receber como retorno a view calculadora/calc e o resultado 2", function() {
		var request = { 
						body: 
							{ 
								num1: '8',
								num2: '4'
							}
						};
		var response = criarResponse();
		
		IndexController.div(request, response);
		
		expect(response.view).toEqual("calculadora/calc");
		expect(response.object.resultado).toEqual(2);
	});
	it("Espero receber como retorno a view calculadora/calc e o resultado 3", function() {
		var request = { 
						body: 
							{ 
								num1: '9',
							}
						};
		var response = criarResponse();
		
		IndexController.raiz(request, response);
		
		expect(response.view).toEqual("calculadora/calc");
		expect(response.object.resultado).toEqual(3);
	});
	it("Espero receber como retorno a view calculadora/calc e o resultado 2*3", function() {
		var request = { 
						body: 
							{ 
								num1: '2',
								num2: '3'
							}
						};
		var response = criarResponse();
		
		IndexController.pow(request, response);
		
		expect(response.view).toEqual("calculadora/calc");
		expect(response.object.resultado).toEqual(8);
	});
	
});

function criarResponse() {
	return {
	   view : "",
	   object : {},
	   
	   render : function( view, object ) {
		   this.view = view;
		   this.object = object;
	   },
	   redirect : function( view ) {
		   this.view = view;
	   }
   };	
};

